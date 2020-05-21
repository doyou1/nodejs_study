var express = require('express');
var router = express.Router();
  
/* GET product page. */
router.get('/product', function(req, res, next) {
    res.render('product', { title: 'product' });
});

module.exports = router;
  