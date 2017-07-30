let fs = require('fs');
let net = require('net');
let protobuf = require('protobufjs');
let config = require("./config.json");

let root = protobuf.loadSync("models/request.proto");
let Request = root.lookupType("ledmodule.Request");

let socket = new net.Socket();

socket.connect(config.serverSocket, function(){
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
    socket.write(Request.encode(object).finish() + "\n");
}