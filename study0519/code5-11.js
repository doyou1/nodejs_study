//exit 이벤트 연결
process.on('exit',function(code){
    console.log('종료!')
});

//이벤트 강제 발생
//emit()은 이벤트 리스너만 실행시킨다
process.emit('exit')
process.emit('exit')
process.emit('exit')
process.emit('exit')
process.emit('exit')

console.log('프로그램 실행중')

//종료!
//종료!
//종료!
//종료!
//종료!
//프로그램 실행중
//종료!
