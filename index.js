let net = require('net');
let protobuf = require('protobufjs');
let gif = require('./util/gif');
let config = require("./config.json");
let client = require('./forwarder/client');

let root = protobuf.loadSync("models/request.proto");
let Request = root.lookupType("ledmodule.Request");

let socket = new net.Socket();

socket.connect(config.serverSocket, function(){
    client.onMessage((message) => {
        switch (message.command){
            case "/ledtext":
                writeMessage(message);
                break;
            case "/ledgif":
                writeGifMessage(message);
                break;
        }
        console.log(message);
    });
});



function writeMessage(message){
    let object = {
        action: Request.getEnum("Action").TEXT,
        sender: message.user_name,
        textRequest: {
            text: message.text
        }
    };
    sendObjectToSocket(object);
}

function writeGifMessage(message){
    gif.downLoadGif(message.text, (data) => {
        let object = {
            action: Request.getEnum("Action").GIF,
            sender: message.user_name,
            gifRequest: {
                gif: data
            }
        };
        sendObjectToSocket(object);
    });
}

function sendObjectToSocket(object){
    let message = Request.encode(object).finish();
    let buffer = new Buffer(4);
    buffer.writeUInt32LE(message.length, 0);
    socket.write(buffer);
    socket.write(message);
}