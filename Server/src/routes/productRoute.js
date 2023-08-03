const router = require("express").Router();
const productController = require("../controllers/productController");
const isAuth = require("../middlewares/isAuth");

//Get product detail
router.get('/:slug', productController.getProductDetail);

//Get product by categoryid
router.get('/category', productController.getProductByCategory);

//Post Cart-item
router.post('/cart-item', productController.postCartItem);

//Cart-item
router.get('/cart-item', productController.getCartItem);

//Get all products
router.get('/', productController.getProducts);

router.post('/create', productController.createProduct);

router.put('/ratings', isAuth.verifyToken, productController.ratingProduct);

module.exports = router;