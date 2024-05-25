import net from 'net';

const server = net.createServer((socket) => {
    socket.write('Hello');

    socket.on('data', (data) => {
        console.log(data.toString());
    });

    socket.on('error', (error) => {
        if (error.code === 'ECONNRESET') {
            console.log('Connection error');
            return;
        }
    });

    socket.on('close', () => {
        console.log('Connection closed');
    })
});
const port = 8081;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});