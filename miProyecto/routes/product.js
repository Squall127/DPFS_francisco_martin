var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('/products/detail', { title: 'Express' });
});

router.get('/products/edit', function(req, res, next) {
  res.render('products/edit');
});

module.exports = router;