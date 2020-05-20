var http = require('http');

http.createServer(function(request, response){

    //응답코드 302는 리다이렉트 상태
    response.writeHead(302,{'Location' : 'http://www.naver.com'});
    response.end();

}).listen(52273,function(){
    console.log('Server Running at http://127.0.0.1:52273');
});

/* Http Status Code 예

    1XX 처리중          100 continue
    2XX 성공            200 OK
    3XX 리다이렉트      300 Multiple Choices
    4XX 클라이언트 오류 400 Bad Request
    5XX 서버오류        500 Internal Server Error

*/
