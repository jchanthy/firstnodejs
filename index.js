import fs from 'fs';

fs.readFile('async1.txt', function (err, data) {
    try {
        if (err) throw err;
        console.log(data.toString())
    } catch (err) {
        console.log('Error');
    }
});

console.log('done!');
