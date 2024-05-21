import fs from 'fs';
import * as csv from 'csv-parse';

let sum = 0;
fs.createReadStream('transactions.csv')
    .pipe(csv.parse({ delimiter: ',' }))
    .on('data', function (row) {
        sum += parseFloat(row[1]);

    })
    .on('end', function () {
        console.log(sum);
    })
    .on('error', function (error) {
        console.log(error.message);
    });