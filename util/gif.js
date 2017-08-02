let giphy = require('giphy-api')();
let download = require('download');
let shuffle = require('shuffle-array');
let logger = require('./logger');
let now = require('performance-now');

let gif = {};

gif.downLoadGif = (text, callback) => {
    logger.log("gif", "Searching for gif from phrase: " + text);
    giphy.search(text, (err, res) => {
        if(res.data.length === 0){
            logger.log("gif", "Unable to find gif from phrase: " + text);
            return callback(new Error("No gif found"));
        }
        shuffle(res.data);
        let selectedGif = res.data[0];
        logger.log("gif", "Starting to download gif with id: " + selectedGif.id);
        let start = now();
        download(selectedGif.images.original.url)
            .then((data) => {
                let time = (now() - start).toFixed(0);
                logger.log("gif", "Finished Downloading gif with id: " + selectedGif.id + ", took " + time + "ms");
                callback(null, data)
            });
    });
};

module.exports = gif;