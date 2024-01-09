const { getAllOrderService, createOrder } = require("../services/orderService");

const orderController = {
    // getOrder : async(req, res) => {
    //     try {
    //         const response = await getAllOrderService();

    //         return res.status(200).json(response);
    //     } catch (error) {
    //         return res.status(500).json(error);
    //     }
    // },

    createOrder : async(req, res) => {
        try {
            const response = await createOrder(req.body);

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

}

module.exports = orderController;