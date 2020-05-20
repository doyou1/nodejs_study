//Http 404 웹 페이지를 찾을 수 없습니다.

var http = require('http');

http.createServer(function(request,response){

    response.writeHead(404);
    response.end();

}).listen(52273,function(){
    console.log('Server Running at http://127.0.0.1:52273');
});