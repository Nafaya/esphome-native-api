const { pb } = require('../utils/messages');
const Base = require('./Base')

// string icon = 5;
// float min_value = 6;
// float max_value = 7;
// float step = 8;
// bool disabled_by_default = 9;
// EntityCategory entity_category = 10;
// string unit_of_measurement = 11;
// NumberMode mode = 12;
// string device_class = 13;
class Number extends Base {
    constructor(data) {
        super(data);
    }
    // fixed32 key = 1;
    // float state = 2;
    static commandService(connection, {
        key,
        state
    }) {
        if (!connection) throw new Error('connection is not attached');
        const message = new pb.NumberCommandRequest();
        message.setKey(key);
        message.setState(state);
        connection.sendCommandMessage(message);
    }
    command(data) {
        this.constructor.commandService(this.connection, { ...data, key: this.config.key });
    }
    setState(state) {
        if (state < this.config.minValue) throw new Error(`state(${state}) is less than the minimum(${this.config.minValue})`);
        if (state > this.config.maxValue) throw new Error(`state(${state}) is greater than the maximum(${this.config.maxValue})`);
        this.command({ state });
    }
}

module.exports = Number;