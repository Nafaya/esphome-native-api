const { pb } = require('../utils/messages');
const Base = require('./Base')

// string icon = 5;
// bool disabled_by_default = 6;
// EntityCategory entity_category = 7;
// string device_class = 8;
class Button extends Base {
    constructor(data) {
        super(data);
    }
    // fixed32 key = 1;
    static commandService(connection, {
        key
    }) {
        if (!connection) throw new Error('connection is not attached');
        const message = new pb.ButtonCommandRequest();
        message.setKey(key);
        connection.sendCommandMessage(message);
    }
    command(data) {
        this.constructor.commandService(this.connection, { ...data, key: this.config.key });
    }
    push() {
        this.command();
    }
}

module.exports = Button;