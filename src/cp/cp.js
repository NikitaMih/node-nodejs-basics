import { fork } from 'node:child_process';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = path.join(__dirname, 'files/script.js');

const spawnChildProcess = async (args) => {
    const child = fork(pathToFile, args);
  
    child.on('message', (data) => {
      console.log(`Received from child process: ${data}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2']);
