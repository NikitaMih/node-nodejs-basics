import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from  'node:fs';
import path from 'path';
import * as fs from 'fs';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const gzip = createGzip();
const source = createReadStream(__dirname + '/files/fileToCompress.txt');
const destination = createWriteStream(__dirname + '/files/archive.gz');


const compress = async () => {
    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('Error:', err);
        }
        fs.unlink(__dirname + '/files/fileToCompress.txt', (err) => {
            if (err) {
                console.error('Error:', err);
            }
        });
    });
};

await compress();