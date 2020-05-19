var fs = require('fs');

var text = fs.readFileSync('textfile.txt','utf8');
console.log(text);


fs.readFile('textfile.txt','utf8',function(error, data){
    console.log(data);
});