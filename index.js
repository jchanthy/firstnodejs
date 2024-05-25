import { Publisher } from './Publisher.js';
import { Subscriber } from './Subscriber.js';
import { EventEmitter } from 'events';

const emitter = new EventEmitter();

const publisher = new Publisher(emitter);
const subscriber = new Subscriber(emitter);

subscriber.subscribeToEvent();
publisher.publishMessage('Hello World from John');

