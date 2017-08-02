let fs = require('fs');
let config = require('../config.json');

let logger = {};

logger.log = (type, message) => {
    if(config.debug){
        let timestamp = new Date();
        let log = "[" + timestamp.toISOString() + "] " + type + ": " + message;
        console.log(log);
        fs.appendFileSync(config.logFile, log + '\n');
    }
};

module.exports = logger;