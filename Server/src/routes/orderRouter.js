const orderController = require('../controllers/orderController');
const isAuth = require('../middlewares/isAuth');

const router = require("express").Router();

// router.get('/', orderController.getOrder);
router.post('/', orderController.createOrder);

module.exports = router;
