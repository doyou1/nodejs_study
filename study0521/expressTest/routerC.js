var express = require('express');
var router = express.Router();

//페이지 라우트
router.get('/index',function(request, response){
    response.send('<h1>Index Page C</h1>');
});

exports.router = router;