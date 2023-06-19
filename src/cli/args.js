const parseArgs = () => {
    return console.log(process.argv.slice(2).map(el => el.includes('--') ? el.replace('--', '') : `is ${el},`).join(' ').slice(0, -1));
};

parseArgs();