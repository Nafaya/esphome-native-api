const { pb } = require('../utils/messages');
const Base = require('./Base')

// bool supports_oscillation = 5;
// bool supports_speed = 6;
// bool supports_direction = 7;
// int32 supported_speed_levels = 8;
// bool disabled_by_default = 9;
// string icon = 10;
// EntityCategory entity_category = 11;
class Fan extends Base {
    constructor(data) {
        super(data);
    }
    // fixed32 key = 1;
    // bool has_state = 2;
    // bool state = 3;
    // bool has_speed = 4 [deprecated = true];
    // FanSpeed speed = 5 [deprecated = true];
    // bool has_oscillating = 6;
    // bool oscillating = 7;
    // bool has_direction = 8;
    // FanDirection direction = 9;
    // bool has_speed_level = 10;
    // int32 speed_level = 11;
    static commandService(connection, {
        key,
        state,
        speed,
        oscillating,
        direction,
        speedLevel
    }) {
        if (!connection) throw new Error('connection is not attached');
        const message = new pb.FanCommandRequest();
        message.setKey(key);
        if (state !== undefined) {
            message.setHasState(true);
            message.setState(state);
        }
        if (speed !== undefined) {
            message.setHasSpeed(true);
            message.setSpeed(speed);
        }
        if (oscillating !== undefined) {
            message.setHasOscillating(true);
            message.setOscillating(oscillating);
        }
        if (direction !== undefined) {
            message.setHasDirection(true);
            message.setDirection(direction);
        }
        if (speedLevel !== undefined) {
            message.setHasSpeedLevel(true);
            message.setSpeedLevel(speedLevel);
        }
        connection.sendCommandMessage(message);
    }
    command(data) {
        this.constructor.commandService(this.connection, { ...data, key: this.config.key });
    }
    setState(state) {
        this.command({ state });
    }
    setOscillation(oscillation) {
        if (!this.config.supportsOscillation) throw new Error('oscillation is not supported');
        this.command({ oscillation });
    }
    setSpeed(speed) {
        if (!this.config.supportsSpeed) throw new Error('speed is not supported');
        this.command({ speed });
    }
    setDirection(speed) {
        if (!this.config.supportsDirection) throw new Error('direction is not supported');
        this.command({ speed });
    }
    setSpeedLevel(speedLevel) {
        if (!this.config.supportedSpeedLevels > 0) throw new Error('speed level is not supported');
        this.command({ speedLevel });
    }
}

module.exports = Fan;