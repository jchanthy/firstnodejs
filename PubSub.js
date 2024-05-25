export class Publisher {
    constructor(emitter) {
        this.emitter = emitter;
    }
    publishMessage(event, message) {
        this.emitter.emit(event, message);
    }
}

export class Subscriber {
    constructor(emitter) {
        this.emitter = emitter;
    }
    subscribeToEvent(event) {
        this.emitter.on(event, (message) => {
            console.log(`Received message: , ${message}`);
        })
    }
}