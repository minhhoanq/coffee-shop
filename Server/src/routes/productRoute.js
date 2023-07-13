const router = require("express").Router();
const productController = require("../controllers/productController");

//Get product detail
router.post('/detail', productController.getProductDetail);

//Get product by categoryid
router.post('/category', productController.getProductByCategory);

//Cart-item
router.post('/cart-item', productController.getCartItem);

//Get all products
router.get('/', productController.getProducts);

module.exports = router;