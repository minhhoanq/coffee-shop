const router = require("express").Router();
const cartController = require("../controllers/cartController");
const isAuth = require("../middlewares/isAuth");

router.get('/', cartController.getAllCartItemById);

module.exports = router;