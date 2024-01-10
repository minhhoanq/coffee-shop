const { getAllBillCouponsService } = require('../services/couponsService')

const couponsController = {
    getAllBillCoupons : async(req, res) => {
        try {
            const response = await getAllBillCouponsService();
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = couponsController;