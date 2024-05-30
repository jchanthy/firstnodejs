import http2 from 'http2';

const session = http2.connect('http://localhost:3000');

session.on('error', (err) => {
    console.log(err);
})

const req = session.request({':path': '/'});
req.end();

req.on('stream', (header) => {
    console.log(header);
});

req.setEncoding('utf8');

req.on('data', (chunk) => {
    console.log(chunk);
});

