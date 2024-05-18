import fs from 'fs';

export const writeLogLine = (fileName, line) => {
    fs.writeFile(fileName, line + "\n", (error) => {
        error && console.error("Error writing to log file", error)
    });
};


export const readLog = async (fileName) => {
    return fs.promises.readFile(fileName, 'utf-8', (error, data) => {
        return error ? error : data;
    });
}

export const appendLogLine = (fileName, line) => {
    fs.appendFile(fileName, line + "\n", (error) => {
        error && console.log("Error appending to log file", error)
    })
}