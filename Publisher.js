export class Publisher {
    constructor(emitter) {
        this.emitter = emitter;
    }
    publishMessage(event, message) {
        this.emitter.emit(event, message);
    }
}