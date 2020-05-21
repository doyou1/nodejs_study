//morgan 미들웨어의 토큰

var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan(':method + :date'));
app.use(function(request,response){
    response.send('<h1>express basic</h1>');
});

app.listen(20000,function(){
    console.log('Server Start port:20000');
});