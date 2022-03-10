const Base = require('./Base')

class Select extends Base {
    constructor(data) {
        super(data);
    }
    // fixed32 key = 1;
    // string state = 2;
    command(data) {
        if (!this.connection) throw new Error('connection is not attached');
        this.connection.selectCommandService({ ...data, key: this.config.key });
    }
    setState(state) {
        this.command({ state });
    }
}

module.exports = Select;