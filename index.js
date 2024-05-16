import fs from 'fs';

fs.readFile('async.txt', (err, data) => {
    try {
        if (err) throw err;
        console.log(data.toString())
    } catch (error) {
        console.log('Error');
    }
});
console.log('done!');
