const { pb } = require('../utils/messages');
const Base = require('./Base')

// string icon = 5;
// bool disabled_by_default = 6;
// repeated string tones = 7;
// bool supports_duration = 8;
// bool supports_volume = 9;
// EntityCategory entity_category = 10;
class Siren extends Base {
    constructor(data) {
        super(data);
    }
    // fixed32 key = 1;
    // bool has_state = 2;
    // bool state = 3;
    // bool has_tone = 4;
    // string tone = 5;
    // bool has_duration = 6;
    // uint32 duration = 7;
    // bool has_volume = 8;
    // float volume = 9;
    static commandService(connection, {
        key,
        state,
        tone,
        duration,
        volume
    }) {
        if (!connection) throw new Error('connection is not attached');
        const message = new pb.SirenCommandRequest();
        message.setKey(key);
        if (state !== undefined) {
            message.setHasState(true);
            message.setState(state);
        }
        if (tone !== undefined) {
            message.setHasTone(true);
            message.setTone(tone);
        }
        if (duration !== undefined) {
            message.setHasDuration(true);
            message.setDuration(duration);
        }
        if (volume !== undefined) {
            message.setHasVolume(true);
            message.setVolume(volume);
        }
        connection.sendCommandMessage(message);
    }
    command(data) {
        this.constructor.commandService(this.connection, { ...data, key: this.config.key });
    }
    setState(state) {
        this.command({ state });
    }
    setTone(tone) {
        if (!this.config.tonesList) throw new Error('tone are not supported');
        if (!this.config.tonesList.includes(tone)) throw new Error(`tone(${tone}) is not supported)`);
        this.command({ tone });
    }
    setDuration(duration) {
        if (!this.config.supportsDuration) throw new Error('duration is not supported');
        this.command({ duration });
    }
    setVolume(volume) {
        if (!this.config.supportsVolume) throw new Error('volume is not supported');
        this.command({ volume });
    }
}

module.exports = Siren;