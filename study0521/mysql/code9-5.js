var mysql = require('mysql');

var client = mysql.createConnection({
    user : 'root',
    password : '3319',
    database : 'company',
    insecureAuth: true
});

client.query('SELECT * FROM products',function(error, results, fields){
    if(error){
        console.log('쿼리 문장에 오류 있음');
    }else{
        console.log(results);
    }
});