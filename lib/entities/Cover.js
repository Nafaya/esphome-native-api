const Base = require('./Base')


// bool assumed_state = 5;
// bool supportsPosition = 6;
// bool supportsTilt = 7;
// string device_class = 8;
class Cover extends Base {
    constructor(data) {
        super(data);
    }
    // fixed32 key = 1;
    // // legacy: command has been removed in 1.13
    // // clients/servers must still send/accept it until the next protocol change
    // bool has_legacy_command = 2;
    // LegacyCoverCommand legacy_command = 3;
    // bool has_position = 4;
    // float position = 5;
    // bool has_tilt = 6;
    // float tilt = 7;
    // bool stop = 8;
    command(data) {
        if (!this.connection) throw new Error('connection is not attached');
        this.connection.coverCommandService({ ...data, key: this.config.key });
    }
    setLegacyCommand(legacyCommand) {
        this.command({ legacyCommand });
    }
    setPosition(position) {
        if (!this.config.supportsPosition) throw new Error('brightness is not supported');
        this.command({ position });
    }
    setTilt(tilt) {
        if (!this.config.supportsTilt) throw new Error('tilt is not supported');
        this.command({ tilt });
    }
    setStop(stop) {
        this.command({ stop });
    }
}

module.exports = Cover;