var net = require('net');
var protobuf = require('protobufjs');

var root = protobuf.loadSync("models/request.proto");
var Request = root.lookupType("ledmodule.Request");

var socket = new net.Socket();

socket.connect("/tmp/test.sock", function(){
    var object = {
        action: Request.getEnum("Action").TEXT,
        sender: "I bim 1 sender",
        textRequest: {
            text: 'Hello i am a text'
        }
    };
    socket.write(Request.encode(object).finish() + "\n");
});