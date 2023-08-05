const cartItemService = require("../services/cartItemService")

const cartController = {
    getAllCartItemById: async(req, res) => {
        try {
            const response = await cartItemService.getCartItemByIDService();
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addCartItemById: async(req, res) => {
        try {
            const response = await cartItemService.addToCartItemService();
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

module.exports = cartController;
