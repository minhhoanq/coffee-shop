const router = require("express").Router();
const couponsController = require("../controllers/couponsController");

router.get('/', couponsController.getAllBillCoupons);

module.exports = router;