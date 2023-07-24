const router = require("express").Router();
const isAuth = require("../middlewares/isAuth");

const userController = require("../controllers/userController");

//Get all user
router.get("/staff", userController.getAllUser);

//Update user by id
router.put("/:id", userController.updateUser);

//Delete user by id (soft delete)
router.delete("/:id", userController.sortDeleteUser);

//Delete user by id (hard delete)
router.delete("/:id/force", userController.hardDeleteUser);

//Restore user by id
router.patch("/:id/restore", userController.restoreUser);

//Detele user
// router.delete("/:id", isAuth.verifyTokenAndAdminAuth,userController.deteleUser);

module.exports = router;