// 모듈 추출
var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

// 데이터베이스와 연결
var client = mysql.createConnection({
    user : 'root',
    password : '3319',
    database : 'company'
});

//서버 생성
var app = express();
app.use(bodyParser.urlencoded({
    extended : false
}));


//서버 실행
app.listen(20000,function(){
    console.log('Server Start port:20000');
});

//라우터 수행
app.get('/',function(request,response){

    fs.readFile('list.html','utf8',function(error,data){
        client.query('select * from products',function(error,results){
            response.send(ejs.render(data,{
                data : results
            }));
        });
    });
});
app.get('/delete/:id',function(request,response){

    client.query('delete from products where id=?', [request.params.id], function(){

        response.redirect('/');
    });
});

app.get('/insert',function(request,response){
    fs.readFile('insert.html','utf8',function(error,data){
        response.send(data);
    });
});
app.post('/insert',function(request,response){

    var body = request.body;

    client.query('insert into products (name, modelnumber,series) values(?,?,?)', [
        body.name, body.modelnumber, body.series
    ],function(){
        response.redirect('/');
    })

});
app.get('/edit/:id',function(request,response){

    fs.readFile('edit.html','utf8',function(error, data){
        client.query('select * from products where id=?',[request.params.id],function(error, result){
            response.send(ejs.render(data,{
                data : result[0]
            }));
        });
    });

});
app.post('/edit/:id',function(request,response){

    var body = request.body;
    console.log(body);
    client.query('update products set name = ?, modelnumber = ?, series = ? where id = ?',[
        body.name, body.modelnumber, body.series, request.params.id
    ],function(){
        response.redirect('/');
    });
    
});