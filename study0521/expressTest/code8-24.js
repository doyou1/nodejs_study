//기본적인 로그인 구현
var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/',function(request, response){
    if(request.cookies.auth){
        response.send('<h1>Login Success</h1>' + JSON.stringify(request.cookies.user));
    }else{
        response.redirect('/login');
    }
});
app.get('/login',function(request, response){
    fs.readFile('login.html',function(error,data){
        response.send(data.toString());
    })
});
app.post('/login',function(request, response){
    //쿠키 생성
    var username = request.body.username;
    var password = request.body.password;

    //출력합니다
    console.log(username, password);
    console.log(request.body);

    //로그인 확인
    if(username == 'test' && password == 'test'){
        //로그인 성공
        console.log('로그인 성공!');
        response.cookie('auth',true);
        response.cookie('user',{
            'username' : username,
            'password' : password
        });
        response.redirect('/');
    }else{
        //로그인 실패
        console.log('로그인 실패!');
        response.redirect('/login');
    }

});

app.listen(20000,function(){
    console.log('Server Start port:20000');
});