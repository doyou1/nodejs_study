//전체 선택자
/**
 * express 모듈의 페이지 라우팅에는 전체 선택자를 사용할 수 있습니다.
 * 전체 선택자는 코드 8-14처럼 사용합니다.
 * express 모듈은 라우터 메서드를 사용한 순서대로 요청을 확인하므로
 * 전체 선택자를 사용하는 라우터 메서드는 반드시 가장 마지막에 위치해야합니다.
 */
var express = require('express');

var app = express();

//라우터 설정
app.get('/index/:id',function(request,response){
    var id = request.params.id;
    response.send('<h1>Index Page'+id+'</h1>');
});


app.all('*',function(request,response){
    response.status(404).send('<h1>ERROR - Page Not Found</h1>');
});

app.listen(20000,function(){
    console.log('Server Start port:20000');
});