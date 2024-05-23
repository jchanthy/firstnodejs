
import { EventEmitter } from 'events';
const myEventEmitter = new EventEmitter;

function notifyConnection(ip, source) {
    console.log(ip + ' connected' + ' from ' + source);
}

myEventEmitter.on('con', notifyConnection);

myEventEmitter.emit('con', '127.0.0.1', 'localhost');

