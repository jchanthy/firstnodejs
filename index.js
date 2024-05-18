import fs from 'fs';

const getFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
}

// console.log(getFile('async.txt'));
const data = await getFile('async.txt');