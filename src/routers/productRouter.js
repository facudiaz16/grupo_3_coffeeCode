const productController = require('../controllers/productController');

const express = require('express');
const router = express.Router();

router.get('/cart', productController.productCart);
router.get('/detail/:id', productController.productDetail);
router.get('/edit/:id', productController.productCart_detalle);
router.get('/checkout', productController.productCart_facturacion);
router.get('/search', productController.search)


module.exports = router;