const { pb } = require('../utils/messages');
const Base = require('./Base');

// repeated int32 supported_color_modes = 12;
// // next four supports_* are for legacy clients, newer clients should use color modes
// bool legacy_supports_brightness = 5 [deprecated=true];
// bool legacy_supports_rgb = 6 [deprecated=true];
// bool legacy_supports_white_value = 7 [deprecated=true];
// bool legacy_supports_color_temperature = 8 [deprecated=true];
// float min_mireds = 9;
// float max_mireds = 10;
// repeated string effects = 11;
// bool disabled_by_default = 13;
// string icon = 14;
// EntityCategory entity_category = 15;
class Light extends Base {
    constructor(data) {
        super(data);
    }
    // fixed32 key = 1;
    // bool has_state = 2;
    // bool state = 3;
    // bool has_brightness = 4;
    // float brightness = 5;
    // bool has_color_mode = 22;
    // int32 color_mode = 23;
    // bool has_color_brightness = 20;
    // float color_brightness = 21;
    // bool has_rgb = 6;
    // float red = 7;
    // float green = 8;
    // float blue = 9;
    // bool has_white = 10;
    // float white = 11;
    // bool has_color_temperature = 12;
    // float color_temperature = 13;
    // bool has_cold_white = 24;
    // float cold_white = 25;
    // bool has_warm_white = 26;
    // float warm_white = 27;
    // bool has_transition_length = 14;
    // uint32 transition_length = 15;
    // bool has_flash_length = 16;
    // uint32 flash_length = 17;
    // bool has_effect = 18;
    // string effect = 19;
    static commandService(connection, {
        key,
        state,
        brightness,
        red, green, blue,
        colorMode,
        colorBrightness,
        white,
        colorTemperature,
        coldWhite,
        warmWhite,
        transitionLength,
        flashLength,
        effect
    }) {
        if (!connection) throw new Error('connection is not attached');
        const message = new pb.LightCommandRequest();
        message.setKey(key);
        if (state !== undefined) {
            message.setHasState(true);
            message.setState(state);
        }
        if (brightness !== undefined) {
            message.setHasBrightness(true);
            message.setBrightness(brightness);
        }
        if (colorMode !== undefined) {
            message.setHasColorMode(true);
            message.setColorMode(colorMode);
        }
        if (colorBrightness !== undefined) {
            message.setHasColorBrightness(true);
            message.setColorBrightness(colorBrightness);
        }
        if (red !== undefined && green !== undefined && blue !== undefined) {
            message.setHasRgb(true);
            message.setRed(red);
            message.setGreen(green);
            message.setBlue(blue);
        }
        if (white !== undefined) {
            message.setHasWhite(true);
            message.setWhite(white);
        }
        if (colorTemperature !== undefined) {
            message.setHasColorTemperature(true);
            message.setColorTemperature(colorTemperature);
        }
        if (coldWhite !== undefined) {
            message.setHasColdWhite(true);
            message.setColdWhite(coldWhite);
        }
        if (warmWhite !== undefined) {
            message.setHasWarmWhite(true);
            message.setWarmWhite(warmWhite);
        }
        if (transitionLength !== undefined) {
            message.setHasTransitionLength(true);
            message.setTransitionLength(transitionLength);
        }
        if (flashLength !== undefined) {
            message.setHasFlashLength(true);
            message.setFlashLength(flashLength);
        }
        if (effect !== undefined) {
            message.setHasEffect(true);
            message.setEffect(effect);
        }
        connection.sendCommandMessage(message);
    }
    command(data) {
        this.constructor.commandService(this.connection, { ...data, key: this.config.key });
    }
    setState(state) {
        this.command({ state });
    }
    setBrightness(brightness) {
        if (!this.config.legacySupportsBrightness) throw new Error('brightness is not supported');
        this.command({ brightness });
    }
    setRgb(red, green, blue) {
        if (!this.config.legacySupportsRgb) throw new Error('rgb is not supported');
        this.command({ red, green, blue });
    }
    setColorMode(colorMode) {
        if (!this.config.supportedColorModesList) throw new Error('color modes are not supported');
        if (!this.config.supportedColorModesList.includes(colorMode)) throw new Error(`color mode(${colorMode}) is not supported`)
        this.command({ colorMode });
    }
    setColorBrightness(colorBrightness) {
        this.command({ colorBrightness });
    }
    setWhite(white) {
        if (!this.config.legacySupportsWhiteValue) throw new Error('white_value is not supported');
        this.command({ white });
    }
    setColorTemperature(colorTemperature) {
        if (!this.config.legacySupportsColorTemperature) throw new Error('white_value is not supported');
        this.command({ colorTemperature });
    }
    setColdWhite(coldWhite) {
        this.command({ coldWhite });
    }
    setWarmWhite(warmWhite) {
        this.command({ warmWhite });
    }
    setTransitionLength(transitionLength) {
        this.command({ transitionLength });
    }
    setFlashLength(flashLength) {
        this.command({ flashLength });
    }
    setEffect(effect) {
        if (!this.config.effectsList) throw new Error('effects are not supported');
        if (!this.config.effectsList.includes(effect)) throw new Error(`effect(${effect}) is not supported`);
        this.command({ effect });
    }
}

module.exports = Light;