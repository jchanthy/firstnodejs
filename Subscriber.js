export class Subscriber {
    constructor(emitter) {
        this.emitter = emitter;
    }
    subscribeToEvent() {
        this.emitter.on('greeting', (message) => {
            console.log(`Received message: , ${message}`);
        })
    }
}