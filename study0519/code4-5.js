
var url = require('url');
var querystring = require('querystring');

var parsedObject = url.parse('http://www.naver.com')
console.log(querystring.parse(parsedObject.query))