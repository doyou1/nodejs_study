//User-Agent 속성에 따른 응답
var express = require('express');

var app = express();


app.use(function(request,response){

    //User-Agent 속성 추출
    var agent = request.header('User-Agent');

    if(agent.toLowerCase().match(/chrome/)){
        response.send('<h1>Hello Chrome .. !</h1>');
    }else{
        response.send('<h1>Hello Express .. !</h1>');
    }
});

app.listen(20000,function(){
    console.log('Server Start port:20000');
})