/**
 * 남은 과제
 * - canvas 태그에 그린 그림 저장
 * - 저장한 그림을 제공해서 신규 사용자가 들어왔을 때 그리고 있던 그림을 띄움
 * - 터치 이벤트로 스마트 태블릿에서도 그림을 그릴 수 있게함
 * - 그림판 오른쪽 하단에 채팅방을 함께 만들어 봄
 * - 지우개
 */

//모듈 추출
var socketio = require('socket.io');
var express = require('express');
var http = require('http');
var ejs = require('ejs');
var fs = require('fs');

var app = express();
app.use(express.static('public'));

var server = http.createServer(app);
server.listen(20000,function(){
    console.log('Server Running at port:20000');
});

app.get('/',function(request, response){
    fs.readFile('lobby.html',function(error, data){
        response.send(data.toString());
    });
});

app.get('/canvas/:room',function(request,response){
    console.log(request.params.room)
    fs.readFile('canvas.html','utf8',function(error, data){
        
        response.send(ejs.render(data,{
            room : request.params.room
        }));
    });
});

app.get('/room',function(request,response){
    var rooms = Object.keys(io.sockets.adapter.rooms).filter(function(item){
        return item.indexOf('/') < 0;
    });
    response.send(rooms);
});

var io = socketio.listen(server);
io.sockets.on('connection',function(socket){
    var roomId = "";

    socket.on('join',function(data){
        socket.join(data);
        roomId = data;
    });

    socket.on('draw',function(data){
        io.sockets.in(roomId).emit('line',data);
    });

    socket.on('create_room',function(data){
        io.sockets.emit('create_room',data.toString());
    });
});