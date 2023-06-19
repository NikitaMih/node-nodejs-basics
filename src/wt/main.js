import { Worker } from 'node:worker_threads';
import os from 'node:os';

import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = path.join(__dirname, 'worker.js');
const cpus = os.cpus().length;

const performCalculations = async () => {
    for (let index = 0; index < cpus; index++) {
        const worker = new Worker(pathToFile);
        worker.postMessage(10 + index);
        worker.on('message', (message) => {
          console.log(message);  
        });
        worker.on("error", err => console.error('terror: ', err));
    }
};

await performCalculations();