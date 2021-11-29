const Base = require('./Base')

// bool supportsCurrentTemperature = 5;
// bool supportsTwoPointTargetTemperature = 6;
// repeated ClimateMode supported_modes = 7;
// float visual_min_temperature = 8;
// float visual_max_temperature = 9;
// float visual_temperature_step = 10;
// bool supportsAway = 11;
// bool supportsAction = 12;
// repeated ClimateFanMode supported_fan_modes = 13;
// repeated ClimateSwingMode supported_swing_modes = 14;
class Climate extends Base {
    constructor(data) {
        super(data);
    }
    // fixed32 key = 1;
    // bool has_mode = 2;
    // ClimateMode mode = 3;
    // bool has_target_temperature = 4;
    // float target_temperature = 5;
    // bool has_target_temperature_low = 6;
    // float target_temperature_low = 7;
    // bool has_target_temperature_high = 8;
    // float target_temperature_high = 9;
    // bool has_away = 10;
    // bool away = 11;
    // bool has_fan_mode = 12;
    // ClimateFanMode fan_mode = 13;
    // bool has_swing_mode = 14;
    // ClimateSwingMode swing_mode = 15;
    command(data) {
        if (!this.connection) throw new Error('connection is not attached');
        this.connection.climateCommandService({ ...data, key: this.config.key });
    }
    setTargetTemperature(targetTemperature) {
        this.command({ targetTemperature });
    }
    setTargetTemperatureLow(targetTemperatureLow) {
        if (!this.config.supportsTwoPointTargetTemperature) throw new Error('two_point_target_temperature are not supported');
        this.command({ targetTemperatureLow });
    }
    setTargetTemperatureHign(targetTemperatureHign) {
        if (!this.config.supportsTwoPointTargetTemperature) throw new Error('two_point_target_temperature are not supported');
        this.command({ targetTemperatureHign });
    }
    setMode(mode) {
        if (!this.config.supported_modes) throw new Error('modes are not supported');
        if (!this.config.supported_modes.includes(mode)) throw new Error(`mode(${mode}) is not supported)`);
        this.command({ mode });
    }
    setAway(away) {
        if (!this.config.supportsAway) throw new Error('away is not supported');
        this.command({ away });
    }
    setAction(action) {
        if (!this.config.supportsAction) throw new Error('action is not supported');
        this.command({ action });
    }
    setMode(mode) {
        if (!this.config.supported_modes) throw new Error('modes are not supported');
        if (!this.config.supported_modes.includes(mode)) throw new Error(`mode(${mode}) is not supported)`);
        this.command({ mode });
    }
    setFanMode(fanMode) {
        if (!this.config.supported_fan_modes) throw new Error('fan modes are not supported');
        if (!this.config.supported_fan_modes.includes(mode)) throw new Error(`fan mode(${mode}) is not supported)`);
        this.command({ fanMode });
    }
    setSwingMode(swingMode) {
        if (!this.config.supported_swing_modes) throw new Error('swing modes are not supported');
        if (!this.config.supported_swing_modes.includes(mode)) throw new Error(`swing mode(${mode}) is not supported)`);
        this.command({ swingMode });
    }
}

module.exports = Climate;