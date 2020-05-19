var fs = require('fs');

try{
    var data = fs.readFileSync('textfile.txt','utf8');
    console.log(data);
}catch(e){
    console.log(e);
}

try{
    fs.writeFileSync('textfile.txt','Hello World!@#','utf8');
    console.log('FILE WRITE COMPLETE');
}catch(e){
    console.log(e);
}

console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));