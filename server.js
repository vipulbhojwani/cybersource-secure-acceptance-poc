
console.log("1");
var express = require('express');
console.log("2");

console.log("3");

console.log("4");

console.log("5");


var path = require('path')

var indexRouter = require('./server/routes/index');

console.log("6");

//var cyberSourceRouter = require('./server/routes/cybersource');

var cors = require('cors')


console.log("7");

var port = process.env.PORT || 8080;


console.log("8");

var app = express();

console.log("9");

app.use(cors())

console.log("10");

app.use(express.static(path.join(__dirname, '/dist/app')));


console.log("11");

app.use('/encode', indexRouter);
//app.use('/cybersource', cyberSourceRouter);


console.log("12");




console.log(port);
app.listen(port);



