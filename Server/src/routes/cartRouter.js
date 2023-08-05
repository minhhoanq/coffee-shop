const router = require("express").Router();
const cartController = require("../controllers/cartController");
const isAuth = require("../middlewares/isAuth");

//Post Cart-item
router.post('/', isAuth.verifyToken, cartController.addCartItemById);

//Delete Cart-item
router.delete('/', isAuth.verifyToken, cartController.deleteCartItemById);

//Cart-item
router.get('/', isAuth.verifyToken, cartController.getAllCartItemById);

module.exports = router;