const authController = require("../controllers/authController");

const router = require("express").Router();

//Register
router.post("/register", authController.registerUser);

//Login
router.post("/login", authController.loginUser);

module.exports = router;