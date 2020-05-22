//모듈 추출
var fs = require('fs');

//서버생성
var server = require('http').createServer();
var io = require('socket.io').listen(server);

//서버 실행
server.listen(20000,function(){
    console.log('Server Start port:20000');
});

//웹서버 이벤트 연결
server.on('request',function(request,response){
    //HTMLPage.html 파일을 읽음
    fs.readFile('./HTMLPage.html',function(error, data){
        response.writeHead(200,{'Content-Type' : 'text/html'});
        response.end(data);
    });
});

io.sockets.on('connection',function(socket){
    //방 이름 저장할 변슈
    var roomName = null;

    //join 변수
    socket.on('join',function(data){
        roomName = data;
        socket.join(data);
    });

    socket.on('message',function(data){
        io.sockets.to(roomName).emit('message','test');
    });
    
});