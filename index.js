
import { EventEmitter } from 'events';
const myEventEmitter = new EventEmitter;

function notifyConnection(ip) {
    console.log(ip + ' connected');
}

async function process(ip) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Processing done for ' + ip);
}

myEventEmitter.on('con', notifyConnection);
myEventEmitter.on('con', process);

myEventEmitter.emit('con', '127.0.0.1', 'localhost');
myEventEmitter.emit('con', '127.0.0.1', 'localhost');


