var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/product', function(req, res, next) {
  res.render('product', { title: 'Express' });
});

module.exports = router;