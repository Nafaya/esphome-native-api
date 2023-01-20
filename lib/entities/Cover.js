const { pb } = require('../utils/messages');
const Base = require('./Base')

// bool assumed_state = 5;
// bool supports_position = 6;
// bool supports_tilt = 7;
// string device_class = 8;
// bool disabled_by_default = 9;
// string icon = 10;
// EntityCategory entity_category = 11;
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
    static commandService(connection, {
        key,
        legacyCommand,
        position,
        tilt,
        stop
    }) {
        if (!connection) throw new Error('connection is not attached');

        const message = new pb.CoverCommandRequest();
        message.setKey(key);
        if (legacyCommand !== undefined) {
            message.setHasLegacyCommand(true);
            message.setLegacyCommand(legacyCommand);
        }
        if (position !== undefined) {
            message.setHasPosition(true);
            message.setPosition(position);
        }
        if (tilt !== undefined) {
            message.setHasTilt(true);
            message.setTilt(tilt);
        }
        if (stop !== undefined) {
            message.setStop(true);
        }

        connection.sendCommandMessage(message);
    }
    command(data) {
        this.constructor.commandService(this.connection, { ...data, key: this.config.key });
    }
    setLegacyCommand(legacyCommand) {
        this.command({ legacyCommand });
    }
    setPosition(position) {
        if (!this.config.supportsPosition) throw new Error('position is not supported');
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