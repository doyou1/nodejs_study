/*
남은 과제
- 로그인 기능
- 물건 한꺼번에 구매 가능
- 물건이 몇 초 후 카트에서 빠져 나오는지 실시간 표시
*/
//모듈 추출
var fs = require('fs');
var ejs = require('ejs');
var http = require('http');
var express = require('express');

//생성자 함수
var counter = 0;
function Product(name, image, price, count){
    this.index = counter++;
    this.name = name;
    this.image = image;
    this.price = price;
    this.count = count;
}

//변수 선언
var products = [
    new Product('JavaScript', 'chrome.png', 28000, 30),
    new Product('jQuery', 'chrome.png', 28000, 30),
    new Product('Node.js', 'chrome.png', 32000, 30),
    new Product('Socket.io', 'chrome.png', 17000, 30),
    new Product('Connect', 'chrome.png', 18000, 30),
    new Product('Express', 'chrome.png', 31000, 30),
    new Product('EJS', 'chrome.png', 12000, 30)
];

//웹 서버 생성
var app =express();
var server = http.createServer(app);

//웹 서버 설정
app.use(express.static(__dirname + '/public'));

//라우트 수행
app.get('/',function(request,response){
    
    var htmlPage = fs.readFileSync('./HTMLPage.html', 'utf8');
    
    //응답
    response.send(ejs.render(htmlPage,{
            products : products
    }));
    
});

server.listen(20000,function(){
    console.log('Server Running port:20000');
});

var io = require('socket.io').listen(server);
io.sockets.on('connection',function(socket){
    //함수 선언
    function onReturn(index){
        //물건 개수 증가
        products[index].count++;

        //타이머 제거
        clearTimeout(cart[index].timerID);

        //카트에서 물건을 제거함
        delete cart[index];

        //count 이벤트 발생
        io.sockets.emit('count',{
            index : index,
            count : products[index].count
        });
    }

    //변수 선언
    var cart = {};

    //cart 이벤트
    socket.on('cart',function(index){
        //물건 개수 감소
        products[index].count--;
        
        //카트에 물건 넣고 타이머 시작
        cart[index] = {};
        cart[index].index = index;
        cart[index].timerID = setTimeout(function(){
            onReturn(index);
        }, 10 * 60 * 1000);

        //count 이벤트 발생
        io.sockets.emit('count',{
            index : index,
            count : products[index].count
        });
    });

    //but 이벤트
    socket.on('buy',function(index){
        //타이머 제거
        clearTimeout(cart[index].timerID);

        //카트 물건 제거
        delete cart[index];

        //count 이벤트 발생
        io.sockets.emit('count',{
            index : index,
            count : products[index].count
        });
    });

    //return 이벤트
    socket.on('return',function(index){
        onReturn(index);
    });
})

