//query 속성을 사용한 요청 매개변수 추출
var express = require('express');

var app = express();


app.use(function(request,response){

    var name = request.query.name;
    var region = request.query.region;

    response.send('<h1>' + name + '-' + region + '</h1>');

});

app.listen(20000,function(){
    console.log('Server Start port:20000');
})