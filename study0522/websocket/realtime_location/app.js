/*
남은 과제
- 가입 기능, 로그인 기능
- Tracker 페이지 지도 추가
*/
//모듈 추출
var fs = require('fs');
var http = require('http');
var express = require('express');
var socketio = require('socket.io');
var mysql = require('mysql');

//데이터베이스 연결
var client = mysql.createConnection({
    user : 'root',
    password : '3319',
    database : 'location'
});

//웹서버 생성
var app = express();
var server = http.createServer(app);

// GET - /tracker
app.get('/tracker',function(request, response){
    // Tracker.html
    fs.readFile('Tracker.html',function(error, data){
        response.send(data.toString());
    });
});

// GET - /observer
app.get('/observer',function(request,response){
    // Observer.html
    fs.readFile('Observer.html',function(error, data){
        response.send(data.toString());
    });
});

app.get('/showdata',function(request,response){
    //데이터베이스의 데이터 제공
    client.query('select * from locations where name=?',[request.params.name],
    function(error, data){
        response.send(data);
    });
});

server.listen(20000,function(){
    console.log('Server Running at port:20000');
});

//소켓 서버 생성 및 실행
var io = socketio.listen(server);
io.sockets.on('connection',function(socket){
    //join 이벤트
    socket.on('join',function(data){
        socket.join(data); 
    });

    //location 이벤트
    socket.on('location',function(data){
        //데이터 삽입
        client.query('insert into locations(name, latitude, longitude, date) values (?, ?, ?, NOW())'
        ,[data.name, data.latitude, data.longitude]);

        //receive 이벤트 발생
        io.sockets.in(data.name).emit('receive',{
            latitude : data.latitude,
            longitude : data.longitude,
            date : Date.now()
        })
    })
})
















