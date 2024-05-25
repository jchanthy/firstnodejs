export class Publisher {
    constructor(emitter) {
        this.emitter = emitter;
    }
    publishMessage(message) {
        this.emitter.emit('greeting', message);
    }
}