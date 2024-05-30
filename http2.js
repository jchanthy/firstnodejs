import http2 from 'http2';

const port = 3000;

// create Hello handler
const helloHandler = (stream, headers) => {
    console.log( {headers });
    stream.response({':status':' 200'});
    stream.end('Hello World HTTP2');
};

const notFoundHandler = (stream, headers) => {
    console.log({headers});
    stream.response({':status': '404'});
    stream.end('Page Not Found');
};

const server = http2.createServer();

const router = (stream, headers) => {
    const path = headers[':path'];
    const method = headers[':method'];

    let handler;
    
    if(path === '/' && method === 'GET'){
        handler = helloHandler;
    } else {
        handler = notFoundHandler;
    }
    handler(stream, headers);
};
server.on('stream', router);
server.listen(port, () => {console.log(`Server is running prot ${port}`)});