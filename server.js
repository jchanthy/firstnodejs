import http from 'http';
// http.createServer((req, res) => {
//     console.log(req, res);
//     res.write("hello world");
//     res.end();
// }).listen(3000);


http.createServer((_, res) => {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write('Hello World!');
   res.end();
}).listen(3000);