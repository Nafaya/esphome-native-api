const events = require('events');
class BaseEntity extends events {
    constructor({ connection, config, state }) {
        super();
        this.handleState = this.handleState.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        if (!config) throw new Error('config is required');
        this.config = config;
        this.type = this.constructor.name;
        this.name = config.name;
        this.id = config.key;
        if (connection) this.attachConnection(connection);
        if (state) this.handleState(state);
    }
    // sync
    attachConnection(connection) {
        if (this.connection) throw new Error('Connection is already attached');
        this.connection = connection;
        this.connection.on(`message.${this.constructor.getStateResponseName()}`, this.handleMessage);
    }
    detachConnection() {
        if (!this.connection) throw new Error('Connection is not attached');
        this.connection.off(`message.${this.constructor.getStateResponseName()}`, this.handleMessage);
        this.connection = null;
    }
    destroy() {
        this.detachConnection();
        this.destroyed = true;
        this.emit('destroyed');
    }
    static getStateResponseName() {
        return `${this.name}StateResponse`;
    }
    static getListEntitiesResponseName() {
        return `ListEntities${this.name}Response`;
    }
    // async
    // handlers
    handleState(state) {
        this.state = state;
        this.emit('state', state);
    }
    handleMessage(state) {
        if (state.key !== this.id) return;
        this.handleState(state);
    }
}
module.exports = BaseEntity;