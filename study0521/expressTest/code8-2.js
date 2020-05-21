//express 모듈을 사용한 서버 생성 및 실행
//모듈
var express = require('express');

//서버 생성
var app = express();

//request 이벤트 리스너를 설정함
app.use(function(request,response){
    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.end('<h1>Hello express</h1>');
});

app.listen(20000,function(){
    console.log('Server Start');
})