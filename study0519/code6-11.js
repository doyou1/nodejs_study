var fs = require('fs');
var http = require('http');

http.createServer(function(request,response){
    fs.readFile('./아가씨.mp3',function(error, data){
        response.writeHead(200,{'Content-Type' : 'audio/mp3'});
        response.end(data);
    });
}).listen(52273,function(){
    console.log('Server Running at http://127.0.0.1:52274');
});


//Content Type
/* 
text/plain : 기본적인 텍스트
text/html : HTML 문서
text/css : CSS 문서
text/xml : XML 문서
image/jpeg : JPG/JPEG 그림 파일
image/png : PNG 그림 파일
video/mpeg : MPEG 비디오 파일
audio/mp3 : MP# 음악파일

*/