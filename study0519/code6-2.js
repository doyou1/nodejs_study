//서버를 생성합니다
var server = require('http').createServer();

//서버를 실행합니다
server.listen(52273,function(){
    console.log('Server Running at http:127.0.0.1:52273');
})

var test = function(){
    //서버 종료
    server.close();
};

//10초 후 함수를 실행합니다
setTimeout(test,10000);