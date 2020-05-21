var express = require('express');

var app = express();


app.use(function(request,response){

    //User-Agent 속성 추출
    var agent = request.header('User-Agent');
    console.log(request.headers);
    console.log(agent);
    response.sendStatus(200);
});

app.listen(20000,function(){
    console.log('Server Start port:20000');
})