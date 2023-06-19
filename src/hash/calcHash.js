import * as crypto from 'crypto';
import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hash = crypto.createHash('sha256');

const calculateHash = async () => {
    fs.readFile(__dirname + '/files/fileToCalculateHashFor.txt', 'utf-8', (err, data) => {
        if (err) {
            return;
        }
        
        hash.update(data);
        return console.log(hash.digest('hex'));  
    })
};

await calculateHash();