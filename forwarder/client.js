let io = require('socket.io-client');
let config = require('../config.json');
const socket = io('http://' + config.ip + ':' + config.port);

socket.on('connect', () => {
    socket.on("slack", function(msg){
        console.log(msg);
    })
});