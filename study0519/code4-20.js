var fs = require('fs')

fs.readFile('textfile.txt','utf8',function(error, data){
    if(error){ return console.log(error);}

    console.log(data);
});

fs.writeFile('textfile.txt', 'Hello World', 'utf8',function(error, data){
    if(error){ return console.log(error);}

    console.log("File Write Complete");
})