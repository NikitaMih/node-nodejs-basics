import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import process from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {

    const writeStream = fs.createWriteStream(__dirname + '/files/fileToWrite.txt');

    process.stdin.on('data', (data) => {
        writeStream.write(data);
    });
};

await write();