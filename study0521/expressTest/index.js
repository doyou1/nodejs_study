var express = require('express');

var app = express();
app.use('/a',require('./routerA').router);
app.use('/b',require('./routerB').router);
app.use('/c',require('./routerC').router);

app.listen(20000,function(){
    console.log(__dirname);//c:\node_workspace\study0521\expressTest
    console.log('Server Start port:20000');
})