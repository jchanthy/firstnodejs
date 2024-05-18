import fs from 'fs';

const getFile = async (fileName) => {
    try {
        const data = await fs.readFile(fileName);
        return data;
    } catch (err) {
        console.log(err);
    }

}
getFile('async.txt');