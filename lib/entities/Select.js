const { pb } = require('../utils/messages');
const Base = require('./Base')

// string icon = 5;
// repeated string options = 6;
// bool disabled_by_default = 7;
// EntityCategory entity_category = 8;
class Select extends Base {
    constructor(data) {
        super(data);
    }
    // fixed32 key = 1;
    // string state = 2;
    static commandService(connection, {
        key,
        state
    }) {
        if (!connection) throw new Error('connection is not attached');
        const message = new pb.SelectCommandRequest();
        message.setKey(key);
        message.setState(state);
        connection.sendCommandMessage(message);
    }
    command(data) {
        this.constructor.commandService(this.connection, { ...data, key: this.config.key });
    }
    setState(state) {
        if (this.config.optionsList && !this.config.optionsList.includes(state)) throw new Error(`state(${state}) is not supported`);
        this.command({ state });
    }
}

module.exports = Select;