var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('products/detail', { title: 'Express' });
});

router.get('/edit', function(req, res, next) {
  res.render('products/edit');
});

module.exports = router;