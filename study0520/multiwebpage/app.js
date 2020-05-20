//모듈 추출
var http = require('http');
var fs = require('fs');
var url = require('url');

//서버 생성 및 실행
http.createServer(function(request,response){
    //변수 선언(url의 path)
    var pathname = url.parse(request.url).pathname;
    
    //페이지 구분
    if(pathname == '/'){
        //index.html 파일 읽기
        fs.readFile('./index.html',function(error, data){
            //응답함
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.end(data);
        });

    }else if(pathname == '/otherPage'){
        //otherPage.html 파일 읽기
        fs.readFile('./otherPage.html',function(error, data){
            //응답함
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.end(data);
        });
    }
    
}).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});