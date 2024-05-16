import fs from 'fs';

fs.readFile('async.txt', function (err, data) {
    try {
        if (err) throw err;
        console.log(data.toString());
    } catch (err) {
        console.log('Error');
    }
});
console.log('done!');
