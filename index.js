import { writeLogLine, appendLogLine, readLog } from './logger';

// console.log(writeLogLine, appendLogLine, readLog);
writeLogLine('log.txt', 'this is my a log message');
console.log(await readLog('log.txt'));
appendLogLine("log.txt", "this is another log message");
console.log(await readLog("log.txt"));