import http from 'http';
http.createServer((req, res) => {
    console.log(req, res);
    res.write("hello world");
    res.end();
}).listen(81);