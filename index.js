import fs from 'fs';
import * as stringify from 'csv-stringify';

const write = fs.createWriteStream('log.txt');
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const columns = ['num1', 'num2', 'num3'];

const stringifier = stringify.stringify({ header: true, columns: columns });
// use forEach()
data.forEach(el => {
    stringifier.write(el);
});
stringifier.pipe(write);