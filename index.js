let fs = require('fs');
let net = require('net');
let protobuf = require('protobufjs');
let gif = require('./util/gif');
let config = require("./config.json");

let root = protobuf.loadSync("models/request.proto");
let Request = root.lookupType("ledmodule.Request");

let socket = new net.Socket();

socket.connect(config.serverSocket, function(){
    writeGifMessage("Test");
    writeGifMessage("Another test");
    writeMessage();
    setTimeout(writeMessage, 3000);
    setTimeout(writeMessage, 5000);
});

function writeMessage(){
    let object = {
        action: Request.getEnum("Action").TEXT,
        sender: "I bim 1 sender",
        textRequest: {
            text: 'Hello i am a text'
        }
    };
    socket.write(Request.encode(object).finish());
}

function writeGifMessage(message){
    gif.downLoadGif(message, (data) => {
        let object = {
            action: Request.getEnum("Action").GIF,
            sender: "I bim 1 sender",
            gifRequest: {
                gif: data
            }
        };
        let message = Request.encode(object).finish();
        let buffer = new Buffer(4);
        buffer.writeUInt32LE(message.length, 0);
        socket.write(buffer);
        socket.write(message);
    });
}