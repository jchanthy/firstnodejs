import http2 from 'http2';

const session = http2.connect('http://localhost:3000');

session.on('error', (err) => {
    console.error(err);
})

const req = session.request({':path': '/', ':method':'DELETE'});
req.write(JSON.stringify({title: "Frim", author:'fdsa'}), 'utf8');
req.end();

req.on('stream', (header) => {
    console.log(header);
});

req.setEncoding('utf8');

req.on('data', (data) => {
    console.log(data);
});

