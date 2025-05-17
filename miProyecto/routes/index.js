var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products/detail',indexController.detail);
router.get('/users/login',indexController.login);
router.get('/users/register',indexController.register);
router.get('/products/create',indexController.create);
router.get('/products/cart',indexController.cart);

module.exports = router;
