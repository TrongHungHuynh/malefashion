const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define your routes here
//router.get('/', (req, res) => {
//    res.render('./shop/shop-details');
//});
router.get('/', productController.index);
router.get('/:id', productController.getProductById);

module.exports = router;
