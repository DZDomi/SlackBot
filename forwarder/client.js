let io = require('socket.io-client');
let config = require('../config.json');
let logger = require('../util/logger');
const socket = io('http://' + config.ip + ':' + config.port);

let client = {};

client.onMessage = (callback) => {
    socket.on("slack", (msg) => {
        logger.log("client", "Got message from slack user: " + msg.user_name);
        callback(msg);
    })
};

module.exports = client;