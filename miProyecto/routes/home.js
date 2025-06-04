var express = require('express');
var router = express.Router();
const homeController = require('../controllers/indexController');
const productsController = require('../controllers/productsController');

/* GET home page. */
router.get('/', homeController.home);
router.get('/users/login',homeController.login);
router.get('/users/register',homeController.register);
router.get('/products/addForm',productsController.addForm);
router.get('/products/editForm',productsController.editForm);
router.get('/products/cart',homeController.cart);

module.exports = router;
