var express = require('express');
var router = express.Router();
const homeController = require('../controllers/indexController');

/* GET home page. */
router.get('/', homeController.home);
router.get('/products/detail',homeController.detail);
router.get('/users/login',homeController.login);
router.get('/users/register',homeController.register);
router.get('/products/create',homeController.create);
router.get('/products/cart',homeController.cart);

module.exports = router;
