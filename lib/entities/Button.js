const Base = require('./Base')

class Button extends Base {
    constructor(data) {
        super(data);
    }
    // fixed32 key = 1;
    command(data) {
        if (!this.connection) throw new Error('connection is not attached');
        this.connection.buttonCommandService({ ...data, key: this.config.key });
    }
    push() {
        this.command();
    }
}

module.exports = Button;