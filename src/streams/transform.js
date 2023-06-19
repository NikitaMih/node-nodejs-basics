import {Transform} from 'stream';

const transform = async () => {
    const transformStream = new Transform ({
        transform: (data, enc, callback) => {
            const reverseData = [...data.toString()].reverse().join('');
            callback(null, reverseData);
        }
    });

    process.stdin.pipe(transformStream).pipe(process.stdout);
    // Write your code here 
};

await transform();