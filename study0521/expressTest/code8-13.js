//라우팅 매개변수 추출
var express = require('express');

var app = express();

app.get('/page/:id',function(request, response){
    //변수를 선언
    var name = request.params.id;

    response.send('<h1>' + name + '</h1>');
})

app.listen(20000,function(){
    console.log('Server Start port:20000');
})