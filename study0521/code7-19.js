var http = require('http');
var fs = require('fs');
var jade = require('jade');

http.createServer(function(request,response){

    fs.readFile('jadeFile1.jade','utf8',function(error, data){
        //jade 모듈
        var fn = jade.compile(data);

        //출력
        response.writeHead(200,{'Content-Type' : 'text/html'});
        response.end(fn({
            name : 'JH',
            description : 'Hello jade With Node.js ..!'
        }));
    });
}).listen(20000,function(){
    console.log('Server Start');
})

//jade 모듈 참고시 https://github.com/pugjs/pug