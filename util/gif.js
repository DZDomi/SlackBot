let giphy = require('giphy-api')();
let download = require('download');
let shuffle = require('shuffle-array');
let logger = require('./logger');
let now = require('performance-now');
let pretty = require('prettysize');

let gif = {};

gif.downLoadGif = (text, callback) => {
    logger.log("gif", "Searching for gif from phrase: " + text);
    let start = now();
    giphy.search(text, (err, res) => {
        let time = (now() - start).toFixed(0);
        if(res.data.length === 0){
            logger.log("gif", "Unable to find gif from phrase: " + text + ", took " + time + "ms");
            return callback(new Error("No gif found"));
        }
        shuffle(res.data);
        let selectedGif = res.data[0];
        logger.log("gif", "Found gif with id: " + selectedGif.id + ", took " + time + "ms");
        logger.log("gif", "Starting download of id: " + selectedGif.id);
        start = now();
        download("https://media2.giphy.com/media/cVG2i8kfmgETe/giphy.gif")
            .then((data) => {
                time = (now() - start).toFixed(0);
                logger.log("gif", "Finished Downloading gif with id: " + selectedGif.id + ", took " + time + "ms (" + pretty(data.length) + ")");
                callback(null, data)
            });
    });
};

module.exports = gif;