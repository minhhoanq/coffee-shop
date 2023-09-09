const router = require("express").Router();
const isAuth = require("../middlewares/isAuth");

const userController = require("../controllers/userController");

//Get all user
router.get("/", isAuth.verifyTokenAndAdminAuth, userController.getAllUser);

router.get("/get_profile", isAuth.verifyToken, userController.getUserProfile);

//Get all user soft delete
router.get("/trash", userController.getAllUserSoftDelete);

//Get user by id
router.get("/:id", isAuth.verifyToken, userController.getUserById);

//Update User by User
router.put("/update_profile", isAuth.verifyToken, userController.updateUserByUser);

//Update user by id
router.put("/:id", userController.updateUser);

//Delete user by id (soft delete)
router.delete("/:id", isAuth.verifyTokenAndAdminAuth, userController.softDeleteUser);

//Delete user by id (hard delete)
router.delete("/:id/force", userController.hardDeleteUser);

//Restore user by id
router.patch("/:id/restore", userController.restoreUser);

module.exports = router;