let app = require('express')();
let bodyParser = require('body-parser');
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let config = require('../config.json');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/slack', (req, res) => {
    console.log("Got request from slack:\n" + req.body);
    io.emit("slack", req.body);
    //Respond 200 Everything ok
    res.send();
});

server.listen(config.port);