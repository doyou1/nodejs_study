/*
남은 과제
- 예약 취소 기능 : 완료
- 커플 예약 기능(가로로 2명 붙여 예약 가능)
- 영화 및 날짜 선택
*/

//모듈 추출
var socketio = require('socket.io');
var express = require('express');
var http = require('http');
var fs = require('fs');

//변수 선언
var seats = [
    [1,1,0,1,1,0,0,0,0,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
];

//웹 서버 생성
var app = express();
var server = http.createServer(app);

app.get('/',function(reqeust,response,next){
    fs.readFile('./HTMLPage.html',function(error, data){
        response.send(data.toString());
    });
});

app.get('/seats',function(request,response,next){
    response.send(seats);
});

server.listen(20000,function(){
    console.log('Server Running at port:20000');
});

var io = socketio.listen(server);
io.sockets.on('connection',function(socket){
    socket.on('reserve',function(data){
        seats[data.y][data.x] = 2;
        io.sockets.emit('reserve',data);
    }) ;
    socket.on('cancle',function(data){
        seats[data.y][data.x] = 1;
        io.sockets.emit('cancle',data);
    })
});


