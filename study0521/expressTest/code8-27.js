//모듈 추출
var fs = require('fs');
var express = require('express');
var multipart = require('connect-multiparty');

//서버 생성
var app = express();

//미들웨어 설정
app.use(multipart({ uploadDir : __dirname + '/multipart'}));
app.get('/',function(request,response){
    fs.readFile('HTMLPage.html',function(error,data){
        response.send(data.toString());
    });
});

app.post('/',function(request,response){
   // console.log(request.body);
    //console.log(request.files);

    var comment = request.body.comment;
    var imageFile = request.files.image;

    if(imageFile && imageFile.size > 0){
        //변수 선언
        var name = imageFile.name;
        var path = imageFile.path;
        var type = imageFile.type;
       
        //이미지 파일 확인
        if(type.indexOf('image') != -1){
            //이미지 파일의 경우 : 파일 이름 변경
            var outputPath = __dirname + '/multipart/' + Date.now() + '_' + name;
            fs.rename(path, outputPath, function(error){
                response.redirect('/');
            });
        }else{
            //이미지 파일이 아닐 경우 : 파일 제거
            fs.unlink(path, function(error){
                response.sendStatus(400);
            })
        }
    }else{
        response.sendStatus(404);
    }
});

app.listen(20000,function(){
    console.log('Server Start port:20000');
})