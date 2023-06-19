import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from  'node:fs';
import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const gzip = createUnzip();
const source = createReadStream(__dirname + '/files/archive.gz');
const destination = createWriteStream(__dirname + '/files/fileToCompress.txt');

const decompress = async () => {
    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('Error:', err);
        }
        fs.unlink(__dirname + '/files/archive.gz', (err) => {
            if (err) {
                console.error('Error:', err);
            }
        });
    });
};

await decompress();