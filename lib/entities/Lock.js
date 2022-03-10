const Base = require('./Base')

class Lock extends Base {
    constructor(data) {
        super(data);
    }
    // fixed32 key = 1;
    // LockCommand state = 2;
    command(data) {
        if (!this.connection) throw new Error('connection is not attached');
        this.connection.lockCommandService({ ...data, key: this.config.key });
    }
    setState(state) {
        this.command({ state });
    }
}

module.exports = Lock;