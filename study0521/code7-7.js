//ejs 모듈을 사용한 웹 페이지 데이터 전달

var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function(request,response){

    fs.readFile('ejsPage1.ejs','utf8',function(error,data){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(ejs.render(data, {
            name : '재형',
            description : 'Hello EJS EJS!'
        }))
    });
}).listen(52273,function(){
    console.log('Server Start!');
})