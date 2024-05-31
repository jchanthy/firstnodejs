import https from 'https';
import fs from 'fs';

const port = 3000;

const options = {
    key: fs.readFileSync('./keys/private.pem'),
    cert: fs.readFileSync('./keys/certificate.pem')
};

https.createServer(options, (req, res) =>{
    if(req.method === 'GET'){
         res.writeHead(200);
        req.on('end', ()=>{

            res.write('Hello World');
        });
        res.end();
    };

}).listen(port, ()=>{`server running port ${port}`});