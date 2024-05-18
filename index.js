import { getFips } from 'crypto';
import fs from 'fs';
import { get } from 'http';

async function getfile(fileName) {
    const data = fs.promises.readFile(fileName);
    return (await data).toString();
}

const dataGet = await getfile('async.txt');
console.log(dataGet);