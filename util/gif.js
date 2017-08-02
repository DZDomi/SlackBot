let giphy = require('giphy-api')();
let download = require('download');
let shuffle = require('shuffle-array');

let gif = {};

gif.downLoadGif = function(text, callback){
    giphy.search(text, function(err, res){
        if(res.data.length === 0){
            return callback(new Error("No gif found"));
        }
        shuffle(res.data);
        download(res.data[0].images.original.url)
            .then((data) => callback(null, data));
    });
};

module.exports = gif;