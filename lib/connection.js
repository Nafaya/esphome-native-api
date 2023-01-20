const events = require('events');
const net = require('net');
const { Entities } = require('./entities');
const { serialize, deserialize, pb } = require('./utils/messages');

class EsphomeNativeApiConnection extends events {
    constructor({
        port = 6053,
        host,
        clientInfo = 'esphomenativeapi',
        password = '',
        reconnect = true,
        reconnectInterval = 30000,
        authorize = true,
        pingInterval = 15000,
        pingAttempts = 3
    }) {
        super();
        if (!host) throw new Error('host is required');
        const socket = new net.Socket();
        this.buffer = Buffer.from([]);
        socket.on('data', data => {
            this.emit('data', data);
            this.buffer = Buffer.concat([this.buffer, data]);
            let message;
            try {
                while (message = deserialize(this.buffer)) {
                    this.buffer = this.buffer.slice(message.length);
                    const type = message.constructor.type;
                    this.emit(`message.${type}`, message.toObject());
                    this.emit('message', type, message.toObject());
                }
            } catch (e) {
                this.emit('error', e);
                this.emit('unhandledData', data);
            }
        })
        // socket.on('close', () => {
        //     this.socketConnected = false;
        // })
        socket.on('end', () => {
            this.socketConnected = false;
        })
        socket.on('connect', async () => {
            this.socketConnected = true;
            try {
                await this.helloService(this.clientInfo);
                this.connected = true;
                if (this.authorize) {
                    const { invalidPassword } =  await this.connectService(this.password);
                    if (invalidPassword === true) throw new Error('Invalid password');
                    this.authorized = true;
                }
            } catch(e) {
                this.emit('error', e);
                this.socket.end();
            }
        })
        socket.on('error', error => {
            this.emit('error', error);
            this.socketConnected = false;
        })
        this.on('message.PingRequest', () => {
            try {
                this.sendMessage(new pb.PingResponse());
            } catch(e) {
                this.emit('error', new Error(`Failed respond to PingRequest. Reason: ${e.message}`));
            }
        })
        this.on('message.DisconnectResponse', () => {
            try {
                if (this.socketConnected) this.socket.end();
            } catch(e) {
                this.emit('error', new Error(`Failed respond to close connection. Reason: ${e.message}`));
            }
        })
        this.on('message.DisconnectRequest', () => {
            try {
                this.sendMessage(new pb.DisconnectResponse);
                this.socket.end();
            } catch(e) {
                this.emit('error', new Error(`Failed respond to close connection. Reason: ${e.message}`));
            }
        })
        this.socket = socket;
        this._socketConnected = false;
        this._connected = false;
        this._authorized = false;
        this.connecting = false;
        this.reconnecting = false;
        this.disconnecting = false;
        this.host = host;
        this.port = port;
        this.clientInfo = clientInfo;
        this.password = password;
        this.reconnect = reconnect;
        this.reconnectInterval = reconnectInterval;
        this.reconnectTimeout = null;
        this.authorize = authorize;
        this.pingInterval = pingInterval;
        this.pingTimeout = null;
        this.pingAttempts = pingAttempts;
        this.pingCountFailed = 0;
    }
    set socketConnected(value) {
        const disconnecting = this.disconnecting;

        this.connecting = false;

        this.reconnecting = false;
        clearTimeout(this.reconnectTimeout);

        this.disconnecting = false;

        if (this._socketConnected !== value) {
            this.pingCountFailed = 0;
            this._socketConnected = value;
            this.authorized = value && this.authorized;
            this.connected = value && this.connected;
            this.emit(this._socketConnected ? 'socketConnected' : 'socketDisconnected');
            if (this._socketConnected) this.ping();
            else clearTimeout(this.pingTimeout);

            if (!disconnecting && !this._socketConnected && this.reconnect) {
                this.reconnecting = true;
                this.reconnectTimeout = setTimeout(() => {
                    this.reconnecting = false;
                    if (!this.connecting) this.connect();
                }, this.reconnectInterval);
                this.emit('reconnect');
            }
        }
    }
    get socketConnected() {
        return this._socketConnected;
    }
    set connected(value) {
        if (this._connected === value) return;
        this._connected = value;
        this.emit(this._connected ? 'connected' : 'disconnected');
    }
    get connected() {
        return this._connected;
    }
    set authorized(value) {
        if (this._authorized === value) return;
        this._authorized = value;
        this.emit(this._authorized ? 'authorized' : 'unauthorized');
    }
    get authorized() {
        return this._authorized;
    }
    // sync
    connect() {
        if (this.socketConnected) throw new Error('Already connected. Cannot connect.');
        if (this.connecting) throw new Error('Already connecting.');
        this.connecting = true;
        this.socket.connect(this.port, this.host);
    }
    disconnect() {
        // if (!this.socketConnected) throw new Error('Socket not connected. Cannot connect.');
        if (this.reconnecting) {
            clearTimeout(this.reconnectTimeout);
        }
        this.socket.removeAllListeners();
        this.removeAllListeners();
        this.disconnecting = true;
        this.socket.end();
    }
    sendMessage(message) {
        if (!this.socketConnected) throw new Error('Socket is not connected');

        this.socket.write(serialize(message));
    }
    sendCommandMessage(message) {
        if (!this.connected) throw new Error('Not connected');
        if (!this.authorized) throw new Error('Not authorized');
        this.sendMessage(message);
    }
    // async
    async ping() {
        try {
            await this.pingService();
            this.pingCountFailed = 0;
            this.pingTimeout = setTimeout(this.ping.bind(this), this.pingInterval);
        } catch(e) {
            if (++this.pingCountFailed >= this.pingAttempts) this.socketConnected = false;
            else this.pingTimeout = setTimeout(this.ping.bind(this), this.pingInterval);
        }
    }
    async sendMessageAwaitResponse(message, responseMessageTypeName, timeoutSeconds = 5) {
        const clear = () => {
            this.off(`message.${responseMessageTypeName}`, handler);
            clearTimeout(timeout);
        }
        const handler = (message) => {
            clear();
            resolve(message);
        }
        this.sendMessage(message);
        this.once(`message.${responseMessageTypeName}`, handler)
        let timeout = setTimeout(() => {
            clear();
            reject(new Error('timeout'));
        }, timeoutSeconds * 1000)
        let resolve, reject;
        return new Promise((_resolve, _reject) => {
            resolve = _resolve;
            reject = _reject;
        })
    }
    async helloService(clientInfo) {
        const message = new pb.HelloRequest();

        if (clientInfo !== undefined) message.setClientInfo(clientInfo);

        return this.sendMessageAwaitResponse(message, 'HelloResponse');
    }
    async connectService(password) {
        const message = new pb.ConnectRequest();

        if (password !== undefined) message.setPassword(password);

        return await this.sendMessageAwaitResponse(message, 'ConnectResponse');
    }
    async disconnectService() {
        return this.sendMessageAwaitResponse(new pb.DisconnectRequest(), 'DisconnectResponse');
    }
    async pingService() {
        return await this.sendMessageAwaitResponse(new pb.PingRequest(), 'PingResponse');
    }

    async deviceInfoService() {
        if (!this.connected) throw new Error('Not connected');
        return await this.sendMessageAwaitResponse(new pb.DeviceInfoRequest(), 'DeviceInfoResponse');
    }

    async getTimeService() {
        if (!this.connected) throw new Error('Not connected');
        return await this.sendMessageAwaitResponse(new pb.GetTimeRequest(), 'GetTimeResponse');
    }

    async listEntitiesService() {
        if (!this.connected) throw new Error('Not connected');
        if (!this.authorized) throw new Error('Not authorized');
        const message = new pb.ListEntitiesRequest();

        const allowedEvents = [
            'ListEntitiesBinarySensorResponse',
            'ListEntitiesCoverResponse',
            'ListEntitiesFanResponse',
            'ListEntitiesLightResponse',
            'ListEntitiesSensorResponse',
            'ListEntitiesSwitchResponse',
            'ListEntitiesTextSensorResponse',
            'ListEntitiesCameraResponse',
            'ListEntitiesClimateResponse',
            'ListEntitiesNumberResponse',
            'ListEntitiesSelectResponse',
            'ListEntitiesSirenResponse',
            'ListEntitiesLockResponse',
            'ListEntitiesButtonResponse'
        ]
        const entitiesList = [];
        const onMessage = (type, message) => {
            if (!allowedEvents.includes(type)) return;
            entitiesList.push({
                component : type.slice(12, -8),
                entity    : message
            });
        };
        this.on('message', onMessage);
        await this.sendMessageAwaitResponse(message, 'ListEntitiesDoneResponse').then(() => {
            this.off('message', onMessage);
        }, e => {
            this.off('message', onMessage);
            throw e;
        });
        return entitiesList;
    }
    subscribeStatesService() {
        if (!this.connected) throw new Error('Not connected');
        if (!this.authorized) throw new Error('Not authorized');
        this.sendMessage(new pb.SubscribeStatesRequest());
    }
    subscribeLogsService(level = pb.LogLevel.LOG_LEVEL_INFO, dumpConfig = false) {
        if (!this.connected) throw new Error('Not connected');
        if (!this.authorized) throw new Error('Not authorized');
        const message = new pb.SubscribeLogsRequest();
        message.setLevel(level);
        message.setDumpConfig(dumpConfig);
        this.sendMessage(message);
    }
    cameraImageService(single = true, stream = false) {
        if (!this.connected) throw new Error('Not connected');
        if (!this.authorized) throw new Error('Not authorized');
        const message = new pb.CameraImageRequest();
        message.setSingle(single);
        message.setStream(stream);
        this.sendMessage(message);
    }

    // Entity command services
    buttonCommandService(data) {
        Entities.Button.commandService(this, data);
    }
    climateCommandService(data) {
        Entities.Climate.commandService(this, data);
    }
    coverCommandService(data) {
        Entities.Cover.commandService(this, data);
    }
    fanCommandService(data) {
        Entities.Fan.commandService(this, data);
    }
    lightCommandService(data) {
        Entities.Light.commandService(this, data);
    }
    lockCommandService(data) {
        Entities.Lock.commandService(this, data);
    }
    numberCommandService(data) {
        Entities.Number.commandService(this, data);
    }
    selectCommandService(data) {
        Entities.Select.commandService(this, data);
    }
    sirenCommandService(data) {
        Entities.Siren.commandService(this, data);
    }
    switchCommandService(data) {
        Entities.Switch.commandService(this, data);
    }
}

module.exports = EsphomeNativeApiConnection;
