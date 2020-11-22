const events = require('events');
const Connection = require('./connection');
const { create: createEntity, Entities } = require('./entities');
class EsphomeNativeApiClient extends events {
    constructor({
            clearSession = true,
            initializeDeviceInfo = true,
            initializeListEntities = true,
            initializeSubscribeStates = true,
            initializeSubscribeLogs = false,
            ...config
        }) {
        super();
        const connection = new Connection(config);
        this.connection = connection;

        connection.on('authorized', async () => {
            this.connected = true;
            try {
                this.initialized = false;
                if (clearSession) {
                    for (const id of Object.keys(this.entities)) this.removeEntity(id);
                }
                if (initializeDeviceInfo) await connection.deviceInfoService();
                if (initializeListEntities) await connection.listEntitiesService();
                if (initializeSubscribeStates) await connection.subscribeStatesService();
                if (initializeSubscribeLogs) {
                    await connection.subscribeLogsService(...((initializeSubscribeLogs === true) ? [] : [ initializeSubscribeLogs.level, initializeSubscribeLogs.dumpConfig ]));
                }
                this.initialized = false;
                this.emit('initialized');
            } catch(error) {
                this.emit('error', error);
                if (connection.socketConnected) this.connection.socket.end();
            }
        });
        connection.on('unauthorized', async () => {
            this.emit('disconnected');
            this.connected = false;
            this.initialized = false;
        });
        connection.on('message.DeviceInfoResponse', async deviceInfo => {
            this.deviceInfo = deviceInfo;
            this.emit('deviceInfo', deviceInfo);
        });
        for (const [name, EntityClass] of Object.entries(Entities)) {
            connection.on(`message.${EntityClass.getListEntitiesResponseName()}`, async config => {
                if (!this.entities[config.key]) this.addEntity(name, config);
            });
        }
        connection.on('message.SubscribeLogsResponse', async data => {
            this.emit('logs', data);
        });

        connection.on('error', async error => {
            this.emit('error', error);
        });

        this.deviceInfo = null;
        this.entities = {};
        this.initialized = false;
        this._connected = false;
    }
    set connected(value) {
        if (this._connected === value) return;
        this._connected = value;
        this.emit(this._connected ? 'connected' : 'disconnected');
    }
    get connected() {
        return this._connected;
    }
    connect() {
        this.connection.connect();
    }
    disconnect() {
        this.connection.disconnect();
    }
    addEntity(entityName, config) {
        if (this.entities[config.key]) throw new Error(`Entity with id(i.e key) ${config.key} is already added`);
        this.entities[config.key] = createEntity(entityName, { connection: this.connection, config });
        this.emit('newEntity', this.entities[config.key]);
    }
    removeEntity(id) {
        if (this.entities[id]) throw new Error(`Cannot find entity with is(i.e. key) ${id}`);
        this.entities[config.key].detachConnection();
        delete this.entities[config.key];
    }
    // async
    // handlers
}

module.exports = EsphomeNativeApiClient;
