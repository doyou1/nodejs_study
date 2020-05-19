// process.argv

process.argv.forEach(function(item, index){

    //출력합니다
//    console.log(index , '+ : ' , typeof(item) , ' : ', item);
    console.log(index + ' : ' + typeof(item) + ' : '+ item);


    if(item == '--exit'){

        //다음 실행 매개변수를 얻습니다
        var exitTime = Number(process.argv[index + 1]);


            console.log('종료할게요');
            process.exit();

    }

    if(item == 'exit'){
        console.log('HI!');
    }
})