const { pb } = require('../utils/messages');
const Base = require('./Base')

// string icon = 5;
// bool disabled_by_default = 6;
// EntityCategory entity_category = 7;
// bool assumed_state = 8;
// bool supports_open = 9;
// bool requires_code = 10;
// // Not yet implemented:
// string code_format = 11;
class Lock extends Base {
    constructor(data) {
        super(data);
    }
    // fixed32 key = 1;
    // LockCommand command = 2;
    // // Not yet implemented:
    // bool has_code = 3;
    // string code = 4;
    static commandService(connection, {
        key,
        command
    }) {
        if (!connection) throw new Error('connection is not attached');
        const message = new pb.LockCommandRequest();
        message.setKey(key);
        message.setCommand(command);
        connection.sendCommandMessage(message);
    }
    command(data) {
        this.constructor.commandService(this.connection, { ...data, key: this.config.key });
    }
    setCommand(command) {
        if (command == pb.LockCommand.LOCK_OPEN && !this.config.getSupportsOpen()) throw new Error("lock open is not supported")
        this.command({ command });
    }
}

module.exports = Lock;