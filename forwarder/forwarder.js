let app = require('express')();
let server = require('http').createServer(app);
let io = require('socket.io')(server);

io.on('connection', function(client){
    console.log(client);
});
server.listen(3000);