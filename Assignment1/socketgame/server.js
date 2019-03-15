// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);
var fs = require('fs');

if (!fs.existsSync('./log.txt')) {
    fs.writeFile('log.txt', 'Game Log:', function (err) {
        if (err) throw err;
        console.log('Log file created\n');
    });
}

var logging = ''

app.set('port', 5000);
app.use('/static', express.static(__dirname + '/static'));

// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

// Starts the server.
server.listen(5000, function() {
  console.log('Starting server on port 5000');
});

// Add the WebSocket handlers
io.on('connection', function(socket) {
    logging = `CONNECTION: Socket user ${socket.id} connected AT ${getDateTime()}\n`
    fs.appendFile('log.txt', logging, (err) => {  
        if (err){
            throw `ERROR AT ${getDateTime}\n`;
        }
        console.log('Log saved!');
    });
});

setInterval(function() {
    io.sockets.emit('message', 'hi!');
}, 1000);

var players = {};

io.on('connection', function(socket) {
    socket.on('new player', function() {
        io.sockets.emit('message', `Welcome, ${socket.id}, to the game.`)
        socket.broadcast.emit('message', `User ${socket.id} has joined.`)
        logging = `JOINED: Socket user ${socket.id} joined AT ${getDateTime()}\n`
        fs.appendFile('log.txt', logging, (err) => {  
            if (err){
                throw `ERROR AT ${getDateTime}\n`;
            }
            console.log('Log saved!');
        });
        players[socket.id] = {
            x: 300,
            y: 300
        };
        socket.on('disconnect',function(){
            delete players[socket.id]
            socket.broadcast.emit('message', `User ${socket.id} has left.`)
            logging = `DISCONNECT: Socket user ${socket.id} deleted AT ${getDateTime()}\n`
            fs.appendFile('log.txt', logging, (err) => {  
                if (err){
                    throw `ERROR AT ${getDateTime}\n`;
                }
                console.log('Log saved!');
            });
        });
    });
    socket.on('movement', function(data) {
        var player = players[socket.id] || {};
        if (data.left) {
            player.x -= 5;
        }
        if (data.up) {
            player.y -= 5;
        }
        if (data.right) {
            player.x += 5;
        }
        if (data.down) {
            player.y += 5;
        }
    });
});

setInterval(function() {
    io.sockets.emit('state', players);
}, 1000 / 60);

// Get DateTime
function getDateTime() {
    var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;
}