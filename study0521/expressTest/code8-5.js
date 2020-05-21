//send()메서드 사용

var express = require('express');

var app = express();

app.use(function(request,response){

    var output = [];
    for(var i=0;i<3;i++){
        output.push({
            count : i,
            name : 'name - 1' + i
        });
    }

    response.send(output);
});

app.listen(20000,function(){
    console.log('Server Start port:20000');
})