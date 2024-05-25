import net from 'net';

const server = net.createServer((connection) => {
    console.log('Client connected');
});
const port = 8081;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});