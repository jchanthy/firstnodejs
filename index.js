import fs from 'fs';
import * as stringify from 'csv-stringify';

const data = [
    ['John Doe', '30', 'Software Engineer'],
    ['Jane Doe', '25', 'Doctor'],
    ['Alice Smith', '40', 'Teacher']
];
const columns = ['Name', 'Age', 'Occupation'];
const write = fs.createWriteStream('log2.csv');

const stringifier = stringify.stringify({ header: true, columns: columns });
for (let i = 0; i < data.length; i++) {
    stringifier.write(data[i]);
}
stringifier.pipe(write);