var fs = require('fs');

var file_readed = fs.readFileSync('txt.txt', 'utf8');

//console.log(file_readed);

var mess = file_readed + ' հեղինակն է Եղիշե Չարենց';
fs.writeFileSync('textwrite.txt',mess);



// fs.readFile('textwrite.txt', 'utf8', function(err,data){
// console.log(data);
// });
// console.log('test');