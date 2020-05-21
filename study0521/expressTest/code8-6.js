//404코드 전달
var express = require('express');

var app = express();

//미들웨어 설정
app.use(function(request,response){
    response.status(404).send('<h1>ERROR</h1>');
});

//서버 실행
app.listen(20000,function(){
    console.log('Server Start port:20000');
})