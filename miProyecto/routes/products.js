var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/addForm',productsController.addForm);
router.post('/addForm',productsController.store);
router.get('/editForm/:id',productsController.editForm);
router.post('/editForm/:id',productsController.update);
router.delete('/products/destroy/:id',productsController.destroy);

module.exports = router;