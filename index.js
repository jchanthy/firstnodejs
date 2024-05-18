import fs from 'fs';

const getFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
}

getFile('async.txt')
    .then(data => console.log(data.toString()))
    .catch(err => console.log(err));