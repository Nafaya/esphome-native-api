const { pb } = require('../utils/messages');
const Base = require('./Base')

// string icon = 5;
// bool disabled_by_default = 6;
// EntityCategory entity_category = 7;
// bool assumed_state = 8;
// bool supports_open = 9;
// bool requires_code = 10;
// string code_format = 11;
class Lock extends Base {
    constructor(data) {
        super(data);
    }
    // fixed32 key = 1;
    // LockCommand command = 2;
    // bool has_code = 3;
    // string code = 4;
    static commandService(connection, {
        key,
        command,
        code
    }) {
        if (!connection) throw new Error('connection is not attached');
        const message = new pb.LockCommandRequest();
        message.setKey(key);
        if (command !== undefined) {
            message.setCommand(command);
        }
        if (code !== undefined) {
            message.setHasCode(true);
            message.setCode(code);
        }
        connection.sendCommandMessage(message);
    }
    command(data) {
        this.constructor.commandService(this.connection, { ...data, key: this.config.key });
    }
    setCommand(command) {
        if (command == pb.LockCommand.LOCK_OPEN && !this.config.supportsOpen) throw new Error("lock open is not supported")
        this.command({ command });
    }
    setCode(code) {
        if (!this.config.requiresCode) throw new Error("code is not require")
        this.command({ code });
    }
}

module.exports = Lock;