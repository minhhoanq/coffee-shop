const paymentMethodsController = require("../controllers/paymentMethodsController");
const isAuth = require("../middlewares/isAuth");

const router = require("express").Router();

router.get("/", paymentMethodsController.getAllPaymentMethods);

module.exports = router;