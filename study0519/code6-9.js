//모듈 추출
var fs = require('fs');
var http = require('http');

//52273번 포트에 서버를 생성하고 실행함
http.createServer(function(request,response){
    fs.readFile('./musume.jpg',function(error, data){
        //문자열, JSON 알아서 판단해줌
        response.writeHead(200,{'Content-Type' : 'image/jpeg'});
        response.end(data);
    });
}).listen(52273,function(){
    console.log('Server Running at http://127.0.0.1:52273');
});