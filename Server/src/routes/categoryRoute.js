const categoryController = require("../controllers/categoryController");

const router = require("express").Router();

//Get all category
router.get('/', categoryController.getAllCategory);

router.post('/create', categoryController.createCategory);

router.delete('/:id', categoryController.deleteCategory);

router.put('/:id', categoryController.updateCategory);

module.exports = router;