//static 미델웨어를 사용한 이미제제공

var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(function(request,response){
    //응답함
    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.end("<img src='/download.jpg' width='100%'>");
});
app.listen(20000,function(){
    console.log('Server Start port:20000');
})