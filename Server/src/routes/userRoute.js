const router = require("express").Router();
const isAuth = require("../middlewares/isAuth");

const userController = require("../controllers/userController");

//Get all staff
router.get("/staff", userController.getAllUser);

//Update staff by id
router.put("/:id", userController.updateUser);

//Delete staff by id
router.delete("/:id", userController.deleteUser);

//Detele user
// router.delete("/:id", isAuth.verifyTokenAndAdminAuth,userController.deteleUser);

module.exports = router;