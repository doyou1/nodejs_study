//모듈 추출
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

//더미 데이터베이스 구현
var DummyDB = (function(){
    //변수 선언
    var DummyDB = {};
    var storage = [];
    var count = 1;

    //메서드 구현
    DummyDB.get = function(id){
        if(id){
            //변수 가공
            id = (typeof id == 'string') ? Number(id) : id;

            //데이터 선택
            for(var i in storage){
                if(storage[i].id == id){
                    return storage[i];
                }else{
                    return storage;
                }
            }
        }
    };

    DummyDB.insert = function(data){
        data.id = count++;
        storage.push(data);
        return data;
    };

    DummyDB.remove = function(id){
        //변수 가공
        id = (typeof id == 'string') ? Number(id) : id;
        
        //제거
        for(var i in storage){
            if(storage[i].id == id){
                //데이터 제거함
                storage.splice(i,1);
                
                //리턴 : 데이터 삭제 성공
                return true;
            }
        }

        //리턴 : 데이터 삭제 실패
        return false;    
    }

    //리턴
    return DummyDB;
})();

//서버 생성
var app = express();

//미들웨어 설정
app.use(bodyParser.urlencoded({
    extended : false
}));

app.get('/user',function(request,response){
    response.send(DummyDB.get());
});

app.get('/user/:id',function(request,response){
    response.send(DummyDB.get(request.params.id));
});

app.post('/user',function(request,response){
    //변수 선언
    var name = request.body.name;
    var region = request.body.region;

    if(name && region){
        response.send(DummyDB.insert({
            name : name,
            region : region
        }));
    }else{
        throw new Error('error');
    }
});

app.put('/user/:id',function(request,response){
    var id = request.params.id;
    var name = request.body.name;
    var region = request.body.region;

    var item = DummyDB.get(id);
    item.name = name || item.name;
    item.region = region || item.region;

    //응답
    response.send(item);
});

app.delete('/user/:id',function(request,response){
    response.send(DummyDB.remove(request.params.id));
});

app.listen(20000,function(){
    console.log('Server Start port:20000');
})