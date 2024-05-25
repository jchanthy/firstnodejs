import net from 'net';

const client = net.connect({ port: 8081 }, () => {
    console.log('connected to server!');
});