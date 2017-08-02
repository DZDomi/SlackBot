let giphy = require('giphy-api')();
let download = require('download');
let shuffle = require('shuffle-array');
let logger = require('./logger');

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
        download(selectedGif.images.original.url)
            .then((data) => {
                logger.log("gif", "Finished Downloading gif with id: " + selectedGif.id);
                callback(null, data)
            });
    });
};

module.exports = gif;