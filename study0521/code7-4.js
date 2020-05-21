//ejs 모듈을 사용한 웹 페이지 제공

//모듈 추출
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function(request,response){
    //ejsPage.ejs 파일 읽음
    fs.readFile('ejsPage.ejs','utf8',function(error, data){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(ejs.render(data));
    });
}).listen(52273,function(){
    console.log('Server Start');
});