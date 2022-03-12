const { pb } = require('../utils/messages');
const Base = require('./Base')

// string icon = 5;
// bool assumed_state = 6;
// bool disabled_by_default = 7;
// EntityCategory entity_category = 8;
// string device_class = 9;
class Switch extends Base {
    constructor(data) {
        super(data);
    }
    // fixed32 key = 1;
    // bool state = 2;
    static commandService(connection, {
        key,
        state
    }) {
        if (!connection) throw new Error('connection is not attached');
        const message = new pb.SwitchCommandRequest();
        message.setKey(key);
        message.setState(state);
        connection.sendCommandMessage(message);
    }
    command(data) {
        this.constructor.commandService(this.connection, { ...data, key: this.config.key });
    }
    setState(state) {
        this.command({ state });
    }
}

module.exports = Switch;