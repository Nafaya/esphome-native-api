const Base = require('./Base')

// bool supportsOscillation = 5;
// bool supportsSpeed = 6;
class Fan extends Base {
    constructor(data) {
        super(data);
    }
    // fixed32 key = 1;
    // bool has_state = 2;
    // bool state = 3;
    // bool has_speed = 4;
    // FanSpeed speed = 5;
    // bool has_oscillating = 6;
    // bool oscillating = 7;
    command(data) {
        if (!this.connection) throw new Error('connection is not attached');
        this.connection.fanCommandService({ ...data, key: this.config.key });
    }
    setState(state) {
        this.command({ state });
    }
    setOscillation(oscillation) {
        if (!this.config.supportsOscillation) throw new Error('brightness is not supported');
        this.command({ oscillation });
    }
    setSpeed(speed) {
        if (!this.config.supportsSpeed) throw new Error('brightness is not supported');
        this.command({ speed });
    }
}

module.exports = Fan;