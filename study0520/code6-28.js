var http = require('http');


http.createServer(function(req, res){

    console.log(req.headers.cookie);

    //쿠키가 있는지 확인
    if(req.headers.cookie){
        //쿠키를 추출하고 분해, 하나의 String으로 저장(';')으로 구분
        var cookie = req.headers.cookie.split(';').map(function(element){
            var element = element.split('=');
            return {
                key : element[0],
                value : element[1]
            };
        });

        //응답
        res.end('<h1>' + JSON.stringify(cookie) + '</h1>')
    }else{
        //쿠키 생성
        res.writeHead(200,{
            'Content-Type' : 'text/html',
            'Set-Cookie' : ['name = JH', 'region = seoul']
        });

        //응답
        res.end('<h1>쿠기를 생성했습니다</h1>');
    }

}).listen(20000,function(){
    console.log('Server Start');
})