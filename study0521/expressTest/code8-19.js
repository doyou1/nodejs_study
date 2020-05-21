//morgan 미들웨어
//웹 요청이 들어왔을 때 로그를 출력하는 미들웨어

var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('combined'));
app.use(function(request, response){
    response.send('<h1>express basic</h1>');
});

app.listen(20000,function(){
    console.log('Server Start!')
})