let giphy = require('giphy-api')();
let download = require('download');
let shuffle = require('shuffle-array');

let gif = {};

gif.downLoadGif = function(text, callback){
    giphy.search(text, function(err, res){
        shuffle(res.data);
        download(res.data[0].images.original.url)
            .then(callback);
    });
};

module.exports = gif;