import net from 'net';

const client = net.connect({ port: 8081 }, () => {
    client.write('Hello from client !\r\n');
});

client.on('data', (data) => {
    console.log('data received: ' + data);
});
