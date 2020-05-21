//router 모듈화
/**
 * express 모듈은 페이지 라우팅을 모듈로 분리하는 기능을 제공해줍니다.
 * 조금 어렵게 느껴질 수 있는 내용이므로, 책을 모두 읽은 이후에 읽어도 됩니다.
 */

var express = require('express');

var app = express();

//라우터 생성
var routerA = express.Router();
var routerB = express.Router();

//라우터A 설정
routerA.get('/index',function(request,response){
    response.send('<h1>Index Page</h1>');
});

routerB.get('/index',function(request,response){
    response.send('<h1>Index Page</h1>');
});

app.use('/a',routerA);
app.use('/b',routerB);

app.listen(20000,function(){
    console.log('Server Start port:20000');
});


/**
 * 이렇게 설정하면 routerA는 /a/index 경로에 페이지를 생성하며,
 * routerB는 /b/index 경로에 페이지를 생성하게 됩니다.
 * 지금은 간단하게 파일 하나에서 routerA와 routerB를 만들었는데,
 * 실제 프로젝트의 규모가 커졌을 때는 코드 8-16처럼 파일을 분리해서
 * 각각의 라우터를 만든 뒤에 합칩니다
 */