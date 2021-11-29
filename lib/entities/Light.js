const { LightCommandRequest } = require('../protoc/api_pb');
const Base = require('./Base');

// bool supportsBrightness = 5;
// bool supportsRgb = 6;
// bool supportsWhiteValue = 7;
// bool supportsColorTemperature = 8;
// float min_mireds = 9;
// float max_mireds = 10;
// repeated string effects = 11;
class Light extends Base {
    constructor(data) {
        super(data);
    }
    
    //   fixed32 key = 1;
    //   bool state = 2;
    //   float brightness = 3;
    //   float red = 4;
    //   float green = 5;
    //   float blue = 6;
    //   float white = 7;
    //   float color_temperature = 8;
    //   string effect = 9;
    // handleState(state) {
    //     super.handleState(state);
    //     this.emit('state.state', this.state.state);
    //     if (this.config.supportsBrightness) this.emit('state.brightness', this.state.brightness);
    //     if (this.config.supportsRgb) this.emit('state.rgb', this.state.red, this.state.green, this.state.blue);
    //     if (this.config.supportsWhiteValue) this.emit('state.white', this.state.white);
    //     if (this.config.supportsColorTemperature) this.emit('state.colorTemperature', this.state.white);
    // }
    //   fixed32 key = 1;
    //   bool has_state = 2;
    //   bool state = 3;
    //   bool has_brightness = 4;
    //   float brightness = 5;
    //   bool has_rgb = 6;
    //   float red = 7;
    //   float green = 8;
    //   float blue = 9;
    //   bool has_white = 10;
    //   float white = 11;
    //   bool has_color_temperature = 12;
    //   float color_temperature = 13;
    //   bool has_transition_length = 14;
    //   uint32 transition_length = 15;
    //   bool has_flash_length = 16;
    //   uint32 flash_length = 17;
    //   bool has_effect = 18;
    //   string effect = 19;
    command(data) {
        if (!this.connection) throw new Error('connection is not attached');
        this.connection.lightCommandService({ ...data, key: this.config.key });
    }
    setState(state) {
        this.command({ state });
    }
    setBrightness(brightness) {
        if (!this.config.supportsBrightness) throw new Error('brightness is not supported');
        this.command({ brightness });
    }
    setRgb(red, green, blue) {
        if (!this.config.supportsRgb) throw new Error('rgb is not supported');
        this.command({ red, green, blue });
    }
    setWhite(white) {
        if (!this.config.supportsWhiteValue) throw new Error('white_value is not supported');
        this.command({ white });
    }
    setColorTemperature(colorTemperature) {
        if (!this.config.supportsColorTemperature) throw new Error('white_value is not supported');
        this.command({ colorTemperature });
    }
    setTransitionLength(transitionLength) {
        this.command({ transitionLength });
    }
    setFlashLength(flashLength) {
        this.command({ flashLength });
    }
    setWhite(effect) {
        if (!this.config.effects) throw new Error('effects are not supported');
        if (!this.config.effects.includes(effect)) throw new Error(`effect(${effect}) is not supported`);
        this.command({ effect });
    }
}

module.exports = Light;