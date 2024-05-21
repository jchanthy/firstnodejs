import fs from 'fs';
import { Transform } from 'stream';

const stream = fs.createReadStream('input.txt');

stream.on('data', function (data) {
    const chunk = data.toString();
    console.log(chunk);
});

stream.on('end', function () {
    console.log('End of file');
});

const write_stream = fs.createWriteStream('output.txt');

const trans = new Transform({
    transform(chunk, _, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
});
stream.pipe(trans).pipe(write_stream);
