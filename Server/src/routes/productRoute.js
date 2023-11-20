const router = require("express").Router();
const productController = require("../controllers/productController");
const isAuth = require("../middlewares/isAuth");
const uploader = require("../config/cloudinary.config")


/// Recommend System
router.get('/recommended-system', isAuth.verifyToken, productController.recommendSystemController)

//Get product by categoryid
router.get('/category', productController.getProductByCategory);

//Get all products
router.get('/', productController.getProducts);

//Get product detail
router.get('/:slug', productController.getProductDetail);

router.put('/create', isAuth.verifyToken, uploader.single('image'), productController.createProduct);

router.post('/ratings/:slug', isAuth.verifyToken, productController.ratingProduct);

router.get('/ratings/:slug', productController.getAllRatingsProduct);

router.delete('/ratings/:slug', isAuth.verifyToken, productController.deleteRatingProduct);

// router.put('/uploadimage/:id', isAuth.verifyToken, uploader.single('image'), productController.uploadImageProduct);

module.exports = router;