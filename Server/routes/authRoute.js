const authController = require("../controllers/authController");
const isAuth = require("../middlewares/isAuth");

const router = require("express").Router();

//Register
router.post("/register", authController.registerUser);

//Login
router.post("/login", authController.loginUser);

//Refreshtoken
router.post("/refresh", authController.requestRefreshToken);

//Refreshtoken
router.post("/logout", isAuth.verifyToken, authController.logOutUser);

module.exports = router;