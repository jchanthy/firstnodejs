import fs from 'fs';

async function getFile(fileName) {
    let data = fs.promises.readFile(fileName);
    return (await data).toString();
}
let dataGet = fs.readFileSync('async.txt');
// dataGet = getFile('async.txt');
console.log('code here');
console.log('more here');
console.log(await dataGet.toString());


