const ingredientController = require('../controllers/ingredientController');
const isAuth = require('../middlewares/isAuth');

const router = require("express").Router();

router.get('/', ingredientController.getIngredient);

module.exports = router;
