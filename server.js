import http from 'http';

http.createServer((req, res) => {
   if(req.method === 'GET') {
    res.write('Get Request Received');
   } else {
       res.write('Other request received');
   }
    res.end();
}).listen(3000);
console.log('Server running at http://localhost:3000/');