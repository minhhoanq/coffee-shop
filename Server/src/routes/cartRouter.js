const router = require("express").Router();
const cartController = require("../controllers/cartController");
const isAuth = require("../middlewares/isAuth");

//Post Cart-item
router.post('/', isAuth.verifyToken,cartController.addCartItemById);

//Cart-item
router.get('/', cartController.getAllCartItemById);

module.exports = router;