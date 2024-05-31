import https from 'https';
import fs  from "fs";

const options = {
    key: fs.readFileSync('./keys/private.pem'),
    cert: fs.readFileSync('./keys/certificate.pem'),
};
https.createServer(options, (req, res) => {
   if(req.method === 'GET') {
    res.write('Get request received');
   } else if (req.method === 'POST'){
       let body = '';
       req.on('data', (data) => {
           body += data;
       });
       req.on('end', () => {
           body = JSON.parse(body);
           res.write('hello post');
        //    body.find(()=>{});
       });
       req.on('error', (err) => {
           console.error(err);
       })
   } else {
    res.write('Other response');
   }
    res.end('end response');
}).listen(3000);
console.log('Server running at http://localhost:3000/');