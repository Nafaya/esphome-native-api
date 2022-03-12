const Base = require('./Base')

class Camera extends Base {
    constructor(data) {
        super(data);

    }
    // sync
    static getStateResponseName() {
        return `CameraImageResponse`;
    }
    // async
    requestImage(...args) {
        this.handleState(...args);
    }
    // handlers
    handleState(state) {
        this.state = state;
        this.emit('state', state);
    }
    handleMessage(state) {
        this.handleState(state);
    }

}

module.exports = Camera;