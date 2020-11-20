const events = require('events');
const net = require('net');
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
            console.log('Socket Event: data');
            this.emit('data', data);
            this.buffer = Buffer.concat([this.buffer, data]);
            let message;
            try {
                while (message = deserialize(this.buffer)) {
                    this.buffer = this.buffer.slice(message.length);
                    const type = message.constructor.type;
                    console.log('Socket Event: data');
                    console.log('emit', `message.${type}`);
                    this.emit(`message.${type}`, message.toObject());
                    this.emit(`message`, type, message.toObject());
                }
            } catch (e) {
                this.emit('error', e);
                this.emit('unhandledData', data);
            }
        })
        socket.on('close', () => {
            console.log('Socket Event: close');
            this.socketConnected = false;
        })
        socket.on('end', () => {
            console.log('Socket Event: end');
            this.socketConnected = false;
        })
        socket.on('connect', async () => {
            console.log('Socket Event: connect');
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
            console.log('Socket Event: error');
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
        }
        if (!disconnecting && !this._socketConnected && this.reconnect) {
            this.reconnecting = true;
            this.reconnectTimeout = setTimeout(() => {
                this.reconnecting = false;
                if (!this.connecting) this.connect();
            }, this.reconnectInterval);
            this.emit('reconnect');
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
        if (!this.socketConnected) throw new Error('Socket not connected. Cannot connect.');
        this.disconnecting = true;
        this.socket.end();
    }
    sendMessage(message) {
        if (!this.socketConnected) throw new Error('Socket is not connected');

        console.log('serialize(message)', serialize(message));
        this.socket.write(serialize(message));
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
    async connectService() {
        return this.sendMessageAwaitResponse(new pb.ConnectRequest(), 'ConnectResponse');
    }
    async disconnectService() {
        return this.sendMessageAwaitResponse(new pb.DisconnectRequest(), 'DisconnectResponse');
    }
    async listService(password) {
        const message = new pb.ConnectRequest();

        if (password !== undefined) message.setPassword(password);

        return await this.sendMessageAwaitResponse(message, 'ConnectResponse');
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
            'ListEntitiesClimateResponse'
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
    async subscribeStatesService() {
        if (!this.connected) throw new Error('Not connected');
        if (!this.authorized) throw new Error('Not authorized');
        this.sendMessage(new pb.SubscribeStatesRequest());
    }
    async subscribeLogsService(level = pb.LogLevel.LOG_LEVEL_INFO, dumpConfig = false) {
        if (!this.connected) throw new Error('Not connected');
        if (!this.authorized) throw new Error('Not authorized');
        const message = new pb.SubscribeLogsRequest();
        message.setLevel(level);
        message.setDumpConfig(dumpConfig);
        this.sendMessage(message);
    }
    async cameraImageService(single = true, stream = false) {
        if (!this.connected) throw new Error('Not connected');
        if (!this.authorized) throw new Error('Not authorized');
        const message = new pb.CameraImageRequest();
        message.setSingle(single);
        message.setStream(stream);
        this.sendMessage(message);
    }
    // fixed32 key = 1;
  
    // // legacy: command has been removed in 1.13
    // // clients/servers must still send/accept it until the next protocol change
    // bool has_legacy_command = 2;
    // LegacyCoverCommand legacy_command = 3;
  
    // bool has_position = 4;
    // float position = 5;
    // bool has_tilt = 6;
    // float tilt = 7;
    // bool stop = 8;
    async coverCommandService({
        key,
        legacyCommand,
        position,
        tilt,
        stop
    }) {
        if (!this.connected) throw new Error('Not connected');
        if (!this.authorized) throw new Error('Not authorized');
        const message = new pb.CoverCommandRequest();
        message.setKey(key);
        if (legacyCommand !== undefined) {
            message.setHasLegacyCommand(true);
            message.setLegacyCommand(legacyCommand);
        }
        if (position !== undefined) {
            message.setHasPosition(true);
            message.setPosition(position);
        }
        if (tilt !== undefined) {
            message.setHasTilt(true);
            message.setTilt(tilt);
        }
        if (stop !== undefined) {
            message.setStop(true);
        }
        this.sendMessage(message);
    }
    
    //   fixed32 key = 1;
    //   bool has_state = 2;
    //   bool state = 3;
    //   bool has_speed = 4;
    //   FanSpeed speed = 5;
    //   bool has_oscillating = 6;
    //   bool oscillating = 7;
    async fanCommandService({
        key,
        state,
        speed,
        oscillating
    }) {
        if (!this.connected) throw new Error('Not connected');
        if (!this.authorized) throw new Error('Not authorized');
        const message = new pb.FanCommandRequest();
        message.setKey(key);
        if (state !== undefined) {
            message.setHasState(true);
            message.setState(state);
        }
        if (speed !== undefined) {
            message.setHasSpeed(true);
            message.setSpeed(speed);
        }
        if (oscillating !== undefined) {
            message.setHasOscillating(true);
            message.setOscillating(oscillating);
        }
        this.sendMessage(message);
    }
    
    //   fixed32 key = 1;
    //   bool has_state = 2;
    //   bool state = 3;
    //   bool has_brightness = 4;
    //   float brightness = 5;
    //   bool has_rgb = 6;
    //   float red = 7;
    //   float green = 8;
    //   float blue = 9;
    //   bool has_white = 10;
    //   float white = 11;
    //   bool has_color_temperature = 12;
    //   float color_temperature = 13;
    //   bool has_transition_length = 14;
    //   uint32 transition_length = 15;
    //   bool has_flash_length = 16;
    //   uint32 flash_length = 17;
    //   bool has_effect = 18;
    //   string effect = 19;
    async lightCommandService({
        key,
        state,
        brightness,
        red, green, blue,
        white,
        colorTemperature,
        transitionLength,
        flashLength,
        effect
    }) {
        if (!this.connected) throw new Error('Not connected');
        if (!this.authorized) throw new Error('Not authorized');
        const message = new pb.LightCommandRequest();
        message.setKey(key);
        if (state !== undefined) {
            message.setHasState(true);
            message.setState(state);
        }
        if (brightness !== undefined) {
            message.setHasBrightness(true);
            message.setBrightness(brightness);
        }
        if (red !== undefined && green !== undefined && blue !== undefined) {
            message.setHasRgb(true);
            message.setRed(red);
            message.setGreen(green);
            message.setBlue(blue);
        }
        if (white !== undefined) {
            message.setHasWhite(true);
            message.setWhite(white);
        }
        if (colorTemperature !== undefined) {
            message.setHasColorTemperature(true);
            message.setColorTemperature(colorTemperature);
        }
        if (transitionLength !== undefined) {
            message.setHasTransitionLength(true);
            message.setTransitionLength(transitionLength);
        }
        if (flashLength !== undefined) {
            message.setHasFlashLength(true);
            message.setFlashLength(flashLength);
        }
        if (effect !== undefined) {
            message.setHasEffect(true);
            message.setEffect(effect);
        }
        this.sendMessage(message);
    }
    // fixed32 key = 1;
    // bool state = 2;
    async switchCommandService({
        key,
        state
    }) {
        if (!this.connected) throw new Error('Not connected');
        if (!this.authorized) throw new Error('Not authorized');
        const message = new pb.SwitchCommandRequest();
        message.setKey(key);
        message.setState(state);
        this.sendMessage(message);
    }
    // fixed32 key = 1;
    // bool has_mode = 2;
    // ClimateMode mode = 3;
    // bool has_target_temperature = 4;
    // float target_temperature = 5;
    // bool has_target_temperature_low = 6;
    // float target_temperature_low = 7;
    // bool has_target_temperature_high = 8;
    // float target_temperature_high = 9;
    // bool has_away = 10;
    // bool away = 11;
    // bool has_fan_mode = 12;
    // ClimateFanMode fan_mode = 13;
    // bool has_swing_mode = 14;
    // ClimateSwingMode swing_mode = 15;
    async climateCommandService({
        key,
        mode,
        targetTemperature,
        targetTemperatureLow,
        targetTemperatureHigh,
        away,
        fanMode,
        swingMode
    }) {
        if (!this.connected) throw new Error('Not connected');
        if (!this.authorized) throw new Error('Not authorized');
        const message = new pb.ClimateCommandRequest();
        message.setKey(key);
        if (mode !== undefined) {
            message.setHasMode(true);
            message.setMode(mode);
        }
        if (targetTemperature !== undefined) {
            message.setHasTargetTemperature(true);
            message.setTargetTemperature(targetTemperature);
        }
        if (targetTemperatureLow !== undefined) {
            message.setHasTargetTemperatureLow(true);
            message.setTargetTemperatureLow(targetTemperatureLow);
        }
        if (targetTemperatureHigh !== undefined) {
            message.setHasTargetTemperatureHigh(true);
            message.setTargetTemperatureHigh(targetTemperatureHigh);
        }
        if (away !== undefined) {
            message.setHasAway(true);
            message.setAway(away);
        }
        if (fanMode !== undefined) {
            message.setHasFanMode(true);
            message.setFanMode(fanMode);
        }
        if (swingMode !== undefined) {
            message.setHasSwingMode(true);
            message.setSwingMode(swingMode);
        }
        this.sendMessage(message);
    }
}

module.exports = EsphomeNativeApiConnection;
