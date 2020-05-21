var http = require('http');

http.createServer(function(request,response){

    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.end('<h1>Test - File - 1</h1>');

}).listen(20000,function(){
    console.log('Server Start');
});