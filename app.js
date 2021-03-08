const express   = require('express');
const app       = express();
const http      = require('http');
const server    = require('http').createServer(app);  
//initialize socket.io with server
const io        = require('socket.io')(server);

const LISTEN_PORT   = 8080;

server.listen(LISTEN_PORT);
app.use(express.static(__dirname + '/public')); //set root path of server ...

console.log("Listening on port: " + LISTEN_PORT );

//our routes
app.get( '/', function( req, res ){ 
    res.sendFile( __dirname + '/public/index.html' );
});


//socket.io stuff
io.on('connection', (socket) => {

    console.log( socket.id + " connected" );

    //when someone disconnets from server 
    socket.on('disconnect', () => {
        console.log( socket.id + " disconnected" );
    });

    //custom events

    //grow evil mushroomt to this size on click 
    socket.on('grow', (data) => {
        console.log( "grown event received" );          
        io.sockets.emit("grow_mushroom", {x:10, y:10, z:10});
    });

    //make environment fog = 1 on click
    socket.on('fog', () => {
        console.log( "fog event received" );          
        io.sockets.emit("fog_on");
    });

    //delete object from scene on all devices
    socket.on('delete', () => {
        console.log( "delete object event received" );          
        io.sockets.emit("delete_object");
    });
});