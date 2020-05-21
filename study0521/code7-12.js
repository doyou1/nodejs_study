//jade 페이지를 HTML 페이지로 변환

//모듈 추출
var http = require('http');
var jade = require('jade');
var fs = require('fs');

http.createServer(function(request,response){

    fs.readFile('jadePage.jade','utf8',function(error,data){
        //jade 모듈 사용
        var fn = jade.compile(data);
//        console.log(fn()); jade파일 html파일로 변환
        response.writeHead(200,{'Content-Type' : 'text/html'});
        //function의 형태로

        response.end(fn());
    });
}).listen(52273,function(){
    console.log('Server Start!');
});