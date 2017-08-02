let io = require('socket.io-client');
let config = require('../config.json');
const socket = io('http://' + config.ip + ':' + config.port);

let client = {};

client.onMessage = function(callback){
    socket.on("slack", function(msg){
        callback(msg);
    })
};

module.exports = client;