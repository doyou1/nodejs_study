var fs = require('fs');
var http = require('http');

http.createServer(function(request,response){
    fs.readFile('./아가씨.mp3',function(error, data){
        response.writeHead(200,{'Content-Type' : 'audio/mp3'});
        response.end(data);
    });
}).listen(52273,function(){
    console.log('Server Running at http://127.0.0.1:52274');
});