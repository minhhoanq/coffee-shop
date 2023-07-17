const router = require("express").Router();
const isAuth = require("../middlewares/isAuth");

const userController = require("../controllers/userController");

//Get all user
// router.get("/", isAuth.verifyToken, userController.getAllUser);

//Get all staff
router.get("/staff", userController.getAllStaff);

//Detele user
// router.delete("/:id", isAuth.verifyTokenAndAdminAuth,userController.deteleUser);

module.exports = router;