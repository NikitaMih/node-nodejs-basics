const parseEnv = () => {
    let result = [];
    for(let key in process.env) {
        if (key.startsWith('RSS_')) {
            result.push(`${key} = ${process.env.key};`);
        }
    }

    return console.log(result.join(''));
};

parseEnv();