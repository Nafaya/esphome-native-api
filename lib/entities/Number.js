const Base = require('./Base')

class Number extends Base {
    constructor(data) {
        super(data);
    }
    // fixed32 key = 1;
    // float state = 2;
    command(data) {
        if (!this.connection) throw new Error('connection is not attached');
        this.connection.numberCommandService({ ...data, key: this.config.key });
    }
    setState(state) {
        this.command({ state });
    }
}

module.exports = Number;