//쿠키 저장 및 출력

var http = require('http');

http.createServer(function(request, response){

    var date = new Date();
    date.setDate(date.getDate() + 7);
    //쿠키 입력
    response.writeHead(200,{
        'Content-type' : 'text/html',
        'Set-Cookie' : [
            'breakfast = toast;Expires = ' + date.toUTCString(),
            'diner = chicken'
        ]
    });

    //쿠키를 출력
    response.end('<h1>' + request.headers.cookie + '</h1>');

}).listen(52273,function(){
    console.log('Server Running at http://127.0.0.1:52273');
});