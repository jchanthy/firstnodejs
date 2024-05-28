import http from 'http';
import url from 'url';

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    console.log(q.query);
    // const url = url.parse(req.url, true);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('hello');
    res.end();
}).listen(3000);
console.log('Server running at http://localhost:3000/');