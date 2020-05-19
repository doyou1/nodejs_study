//EvenEmitter 객체를 생성함
var EventEmitter = require('events');
var custom = new EventEmitter();

custom.on('tick',function(code){
   console.log('이벤트를 실행합니다');
});

custom.emit('tick');