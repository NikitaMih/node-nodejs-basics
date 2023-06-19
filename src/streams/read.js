import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import process from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const readStream = fs.createReadStream(__dirname + '/files/fileToRead.txt');

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
};

await read();