const { getAllPaymentMethodsService } = require("../services/paymentMethodsService");

const paymentMethodsController = {
    getAllPaymentMethods: async(req, res) => {
        try {
            const response = await getAllPaymentMethodsService();

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = paymentMethodsController;