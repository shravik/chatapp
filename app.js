// this file contains the server code 

var express = require('express'), // created express object 
    app = express(),   
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);  // socket io needs http to work so we passed the server http object 

server.listen(3000);

// creating a route 
app.get('/', function(req,res){
        res.sendFile(__dirname + '/index.html'); 
 });

io.sockets.on('connection',function(socket){
    socket.on('send-message',function(data){
        io.sockets.emit('new message',data); 
    });
              
              
}); 