const router = require("express").Router();
const productController = require("../controllers/productController");

//Get product detail
router.post('/detail', productController.getProductDetail);

//Get product by categoryid
router.post('/category', productController.getProductByCategory);

//Get all products
router.get('/', productController.getAllProduct);

module.exports = router;