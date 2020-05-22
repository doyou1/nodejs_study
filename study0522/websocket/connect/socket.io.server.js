//모듈 추출
var http = require('http')
var fs = require('fs')
var socketio = require('socket.io');

var server = http.createServer(function(request,response){
    fs.readFile('HTMLPage.html',function(error,data){
        response.writeHead(200,{'Content-Type' : 'text/html'});
        response.end(data);
    });
}).listen(20000,function(){
    console.log('Server Start port:20000')
});

//소켓 서버 생성 및 실행
var io = socketio.listen(server);
io.sockets.on('connection',function(socket){
   
    //rint 이벤트
    socket.on('rint',function(data){
        //클라이언트가 전송한 데이터 출력
        console.log('Client Send Data : ', data);

        //클라이언트에 smart 이벤트 발생
        socket.emit('smart', data);

        //public 통신 : 모두에게
        //io.sockets.emit('smart',data);
        //broadcast 통신 : 나 빼고 모두에게
        //sockets.broadcast.emit('smart',data);
        
        //private 통신 : id를 설정
        //io.sockets.to(id).emit('smart',data);
    });
});


