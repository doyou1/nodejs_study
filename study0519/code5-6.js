//이벤트 연결 개수 제한 변경
process.setMaxListeners(15);

process.on('exit',function(){});
process.on('exit',function(){});
process.on('exit',function(){});
process.on('exit',function(){});
process.on('exit',function(){});
process.on('exit',function(){});
process.on('exit',function(){});
process.on('exit',function(){});
process.on('exit',function(){});
process.on('exit',function(){});
process.on('exit',function(){});
process.on('exit',function(){});
process.on('exit',function(){});
process.on('exit',function(){});

//변수 선언
var onUncaughtException = function(error){
    console.log('예외발생');

    //이벤트 제거
    process.removeListener('uncaughtException', onUncaughtException);
};

//process 객체에 uncaughtException 이벤트 연결
process.on('uncaughtException', onUncaughtException);

//2초 간격으로 예외를 발생시킴
var test = function(){
    setTimeout(test, 2000);
    error.error.error();
};

setTimeout(test, 2000);