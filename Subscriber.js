export class Subscriber {
    constructor(emitter, event) {
        this.emitter = emitter;
        this.event = event;
    }
    subscribeToEvent() {
        this.emitter.on(this.event, (message) => {
            console.log(`Received message: , ${message}`);
        })
    }
}