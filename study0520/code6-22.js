//모듈 추출
var http = require('http');
var url = require('url');

http.createServer(function(request, response){
    //method를 확인할 수 있는 변수명
//  console.log(request.method);
//  console.log(request);
//    console.log(url.parse(request.url, true));

    var query = url.parse(request.url, true).query;

    if(request.method == 'GET'){
        console.log('GET 요청입니다');

        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end('<h1>' + JSON.stringify(query) + '</h1>');
    }else if(request.method == 'POST'){
        console.log('POST 요청입니다');
    }
}).listen(52273,function(){
    console.log('Server Start!');
});