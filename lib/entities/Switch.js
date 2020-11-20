const Base = require('./Base')

// string icon = 5;
// bool assumed_state = 6;
class Switch extends Base {
    constructor(data) {
        super(data);
    }
    // fixed32 key = 1;
    // bool state = 2;
    command(data) {
        if (!this.connection) throw new Error('connection is not attached');
        this.connection.switchCommandService({ ...data, key: this.config.key });
    }
    setState(state) {
        this.command({ state });
    }
}

module.exports = Switch;