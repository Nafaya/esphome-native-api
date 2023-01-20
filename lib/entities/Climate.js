const { pb } = require('../utils/messages');
const Base = require('./Base')

// bool supports_current_temperature = 5;
// bool supports_two_point_target_temperature = 6;
// repeated ClimateMode supported_modes = 7;
// float visual_min_temperature = 8;
// float visual_max_temperature = 9;
// float visual_temperature_step = 10;
// // for older peer versions - in new system this
// // is if CLIMATE_PRESET_AWAY exists is supported_presets
// bool legacy_supports_away = 11;
// bool supports_action = 12;
// repeated ClimateFanMode supported_fan_modes = 13;
// repeated ClimateSwingMode supported_swing_modes = 14;
// repeated string supported_custom_fan_modes = 15;
// repeated ClimatePreset supported_presets = 16;
// repeated string supported_custom_presets = 17;
// bool disabled_by_default = 18;
// string icon = 19;
// EntityCategory entity_category = 20;
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
    // // legacy, for older peers, newer ones should use CLIMATE_PRESET_AWAY in preset
    // bool has_legacy_away = 10;
    // bool legacy_away = 11;
    // bool has_fan_mode = 12;
    // ClimateFanMode fan_mode = 13;
    // bool has_swing_mode = 14;
    // ClimateSwingMode swing_mode = 15;
    // bool has_custom_fan_mode = 16;
    // string custom_fan_mode = 17;
    // bool has_preset = 18;
    // ClimatePreset preset = 19;
    // bool has_custom_preset = 20;
    // string custom_preset = 21;
    static commandService(connection, {
        key,
        mode,
        targetTemperature,
        targetTemperatureLow,
        targetTemperatureHigh,
        legacyAway,
        fanMode,
        swingMode,
        customFanMode,
        preset,
        customPreset
    }) {
        if (!connection) throw new Error('connection is not attached');
        const message = new pb.ClimateCommandRequest();
        message.setKey(key);
        if (mode !== undefined) {
            message.setHasMode(true);
            message.setMode(mode);
        }
        if (targetTemperature !== undefined) {
            message.setHasTargetTemperature(true);
            message.setTargetTemperature(targetTemperature);
        }
        if (targetTemperatureLow !== undefined) {
            message.setHasTargetTemperatureLow(true);
            message.setTargetTemperatureLow(targetTemperatureLow);
        }
        if (targetTemperatureHigh !== undefined) {
            message.setHasTargetTemperatureHigh(true);
            message.setTargetTemperatureHigh(targetTemperatureHigh);
        }
        if (legacyAway !== undefined) {
            message.setHasLegacyAway(true);
            message.setLegacyAway(legacyAway);
        }
        if (fanMode !== undefined) {
            message.setHasFanMode(true);
            message.setFanMode(fanMode);
        }
        if (swingMode !== undefined) {
            message.setHasSwingMode(true);
            message.setSwingMode(swingMode);
        }
        if (customFanMode !== undefined) {
            message.setHasCustomFanMode(true);
            message.setCustomFanMode(customFanMode);
        }
        if (preset !== undefined) {
            message.setHasPreset(true);
            message.setPreset(preset);
        }
        if (customPreset !== undefined) {
            message.setHasCustomPreset(true);
            message.setCustomPreset(customPreset);
        }
        connection.sendCommandMessage(message);
    }
    command(data) {
        this.constructor.commandService(this.connection, { ...data, key: this.config.key });
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
        if (!this.config.supportedModesList) throw new Error('modes are not supported');
        if (!this.config.supportedModesList.includes(mode)) throw new Error(`mode(${mode}) is not supported)`);
        this.command({ mode });
    }
    setLegacyAway(legacyAway) {
        if (!this.config.legacySupportsAway) throw new Error('legacy away is not supported');
        this.command({ legacyAway });
    }
    setAction(action) {
        if (!this.config.supportsAction) throw new Error('action is not supported');
        this.command({ action });
    }
    setFanMode(fanMode) {
        if (!this.config.supportedFanModesList) throw new Error('fan modes are not supported');
        if (!this.config.supportedFanModesList.includes(mode)) throw new Error(`fan mode(${mode}) is not supported)`);
        this.command({ fanMode });
    }
    setSwingMode(swingMode) {
        if (!this.config.supportedSwingModesList) throw new Error('swing modes are not supported');
        if (!this.config.supportedSwingModesList.includes(mode)) throw new Error(`swing mode(${mode}) is not supported)`);
        this.command({ swingMode });
    }
    setCustomFanMode(customFanMode) {
        if (!this.config.supportedCustomFanModesList) throw new Error('custom fan modes are not supported');
        if (!this.config.supportedCustomFanModesList.includes(customFanMode)) throw new Error(`custom fan mode(${customFanMode}) is not supported)`);
        this.command({customFanMode});
    }
    setPreset(preset) {
        if (!this.config.supportedPresetsList) throw new Error('presets are not supported');
        if (!this.config.supportedPresetsList.includes(preset)) throw new Error(`preset(${customFanMode}) is not supported)`);
        this.command({preset});
    }
    setCustomPreset(customPreset) {
        if (!this.config.supportedCustomPresetsList) throw new Error('custom presets are not supported');
        if (!this.config.supportedCustomPresetsList.includes(customPreset)) throw new Error(`custom preset(${customPreset}) is not supported)`);
        this.command({customPreset});
    }
}

module.exports = Climate;