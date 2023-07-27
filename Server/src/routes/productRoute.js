const router = require("express").Router();
const productController = require("../controllers/productController");

//Get product detail
router.get('/:id/detail', productController.getProductDetail);

//Get product by categoryid
router.get('/category', productController.getProductByCategory);

//Post Cart-item
router.post('/cart-item', productController.postCartItem);

//Cart-item
router.get('/cart-item', productController.getCartItem);

//Get all products
router.get('/', productController.getProducts);

module.exports = router;