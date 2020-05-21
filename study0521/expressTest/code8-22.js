//cookie-parser 미들웨어를 사용한 쿠키 추출
//모듈 추출
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

//라우터 설정
app.get('/getCookie',function(request,response){
    //응답
    response.send(request.cookies);
});

app.get('/setCookie',function(request,response){
    //쿠키 생성
//    response.cookie('string','cookie');
    response.cookie('string','cookie',{
        maxAge : 6000,
        secure : true
    });//시간과 보완
    response.cookie('json',{
        name : 'cookie',
        property : 'delicious'
    });

    response.redirect('/getCookie');
});

app.listen(20000,function(){
    console.log('Server Start port:20000');
});