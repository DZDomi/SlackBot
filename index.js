let net = require('net');
let protobuf = require('protobufjs');
let gif = require('./util/gif');
let config = require("./config.json");
let client = require('./forwarder/client');
let logger = require('./util/logger');

let root = protobuf.loadSync("models/request.proto");
let Request = root.lookupType("ledmodule.Request");

let socket = new net.Socket();
let timeout;

logger.log("index", "Starting listening on socket: " + config.serverSocket);
socket.on("disconnect", tryToReconnect);
socket.connect(config.serverSocket, socketConnected);

socket.on("error", () => {
    logger.log("index", "Unable to reconnect to socket: " + config.serverSocket + ". Trying again in " + config.socketTimeout/1000 + " seconds...");
    clearTimeout(timeout);
    timeout = setTimeout(tryToReconnect, config.socketTimeout);
});

function tryToReconnect(){
    //Socket is writable no need to try to reconnect
    if(socket.writable){
        return;
    }
    socket.removeListener("connection");
    logger.log("index", "Socket " + config.serverSocket + " disconnected. Trying to reconnect...");
    socket.connect(config.serverSocket, socketConnected);
}

function socketConnected() {
    logger.log("index", "Established socket connection");
    client.onMessage((message) => {
        logger.log("index", "Received message from: " + message.user_name + " Message: " + message.command + " " + message.text);
        switch (message.command) {
            case "/ledtext":
                writeMessage(message);
                break;
            case "/ledgif":
                writeGifMessage(message);
                break;
            case "/ledcancel":
                cancelAction(message);
                break;
            default:
                logger.log("index", "Command: " + message.command + " not recognized");
                break;
        }
    });
}

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
    gif.downLoadGif(message.text, (err, data) => {
        if(err){
            return;
        }
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

function cancelAction(message){
    let object = {
        action: Request.getEnum("Action").CANCEL,
        sender: message.user_name
    };
    sendObjectToSocket(object);
}

function sendObjectToSocket(object){
    let message = Request.encode(object).finish();
    let buffer = new Buffer(4);
    logger.log("index", "Writing message to socket");
    buffer.writeUInt32LE(message.length, 0);
    socket.write(buffer);
    socket.write(message);
    logger.log("index", "Finished writing message to socket");
}