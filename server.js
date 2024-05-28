import https from 'https';
import * as fs from "node:fs";

const options = {
    key: fs.readFileSync('./keys/private.pem'),
    cert: fs.readFileSync('./keys/certificate.pem'),
};
https.createServer(options, (req, res) => {
   if(req.method === 'GET') {
    res.write('Get request received');
   } else {
       let body = '';
       res.on('data', (data) => {
           body += data;
           console.log(data);
       });
       res.on('end', () => {

           body = JSON.parse(body);
           console.log(body);
       });
       req.on('error', (err) => {
           console.error(err);
       })
   }
    res.end();
}).listen(3000);
console.log('Server running at http://localhost:3000/');