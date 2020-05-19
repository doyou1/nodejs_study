//process 객체에 uncaughtException 이벤트를 연결함
process.once('uncaughtException',function(error){
    console.log('예외 발생!');
})

process.on('exit',function(error){
    console.log('종료' + error);
})


var test = function(){
    setTimeout(test, 2000);
    error.error.error();
};

setTimeout(test,2000);


