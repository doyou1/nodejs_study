var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');
var mysql = require('mysql');

// 데이터베이스와 연결
var client = mysql.createConnection({
    user : 'root',
    password : '3319',
    database : 'company'
});

var server = http.createServer(function(request,response){

    fs.readFile('./HTMLPage.html',function(error,data){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(data);
    });
}).listen(20000,function(){
    console.log('Server Running port:20000');
});

var io = socketio.listen(server);
io.sockets.on('connection',function(socket){
    var room;

    socket.on('join',function(data){
        room = data;
        socket.join(room);
        //socket.id는 이벤트 발생시마다 클라이언트 정보로 변함
//        io.sockets.to(socket.id).emit('prevPrint',socket.id);

        client.query("select * from chat where room = ?",[
            room
        ],function(error, results){
            io.sockets.to(socket.id).emit('prevPrint',results);
        })
    });

    socket.on('message',function(data){
        io.sockets.emit('message',data);

        client.query("insert into chat (room, name, message, date) values (? , ? , ? , ?)",[
            data.room, data.name, data.message, data.date
        ],function(){
            console.log('Chat Insert Success');
        });
    });
});