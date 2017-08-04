let giphy = require('giphy-api')();
let download = require('download');
let shuffle = require('shuffle-array');
let logger = require('./logger');
let now = require('performance-now');
let pretty = require('prettysize');
let config = require('../config.json');

let gif = {};

gif.downLoadGif = (text, callback) => {
    logger.log("gif", "Searching for gif from phrase: " + text);
    let start = now();
    giphy.search(text, (err, res) => {
        let time = (now() - start).toFixed(0);
        res.data = removeLargeGifs(res.data, config.gifSize);
        if(res.data.length === 0){
            logger.log("gif", "Unable to find gif from phrase: " + text + ", took " + time + "ms");
            return callback(new Error("No gif found"));
        }
        let selectedGif = shuffle(res.data)[0];
        logger.log("gif", "Found gif with id: " + selectedGif.id + ", took " + time + "ms");
        logger.log("gif", "Starting download of id: " + selectedGif.id);
        start = now();
        download(selectedGif.images.original.url)
            .then((data) => {
                time = (now() - start).toFixed(0);
                logger.log("gif", "Finished Downloading gif with id: " + selectedGif.id + ", took " + time + "ms (" + pretty(data.length) + ")");
                callback(null, data)
            });
    });
};

function removeLargeGifs(data, size) {
    return data.filter((gif) => {
        console.log(gif.images.original);
        return gif.images.original.size < size;
    });
}

module.exports = gif;