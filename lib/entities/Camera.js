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
    async requestImage(...args) {
        await this.handleState(...args);
    }
    // handlers
    async handleState(state) {
        this.state = state;
        this.emit('state', state);
    }
    async handleMessage(state) {
        await this.handleState(state);
    }
    
}

module.exports = Camera;