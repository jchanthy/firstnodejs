import { Publisher } from './Publisher.js';
import { Subscriber } from './Subscriber.js';
import { EventEmitter } from 'events';

const emitter = new EventEmitter();

const publisher = new Publisher(emitter);
const subscriber = new Subscriber(emitter, 'hello');
const sub2 = new Subscriber(emitter, 'hi');

subscriber.subscribeToEvent();
sub2.subscribeToEvent();

publisher.publishMessage('hello', 'Hello World')
publisher.publishMessage('hi', 'Hi World')

