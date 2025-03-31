var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/product',indexController.product);
router.get('/login',indexController.login);
router.get('/register',indexController.register);

module.exports = router;
