let giphy = require('giphy-api')();
let download = require('download');

let gif = {};

gif.downLoadGif = function(text, callback){
    giphy.search(text, function(err, res){
        download(res.data[0].images.original.url)
            .then((data) => { callback(data); })
    });
};

module.exports = gif;