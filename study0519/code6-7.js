require('http').createServer(function(request,response){
    //HTML 파일 READ
    require('fs').readFile('./HTMLPage.html',function(error,data){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write('h2')
        response.end(data);
    });
}).listen(52273,function(){
    console.log('Server Running at http://127.0.0.1:52273');
});