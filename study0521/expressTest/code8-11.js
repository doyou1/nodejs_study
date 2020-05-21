//미들웨어를 사용한 속성 추가

var express = require('express');

var app = express();

//미들웨어 설정
app.use(function(request,response,next){
    //데이터 추가
    request.number = 52;
    response.number = 273;
    next();
});

app.use(function(request,response,next){

    //응답
    response.send('<h1>' + request.number + ' : ' + response.number + '</h1>');

    //52 : 273
});


app.listen(20000,function(){
    console.log('Server Start port:20000');
})