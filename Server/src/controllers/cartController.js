const cartItemService = require("../services/cartItemService")

const cartController = {
    getAllCartItemById: async(req, res) => {
        try {
            const response = await cartItemService.getCartItemByIDService(req.user);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addCartItemById: async(req, res) => {
        try {
            const response = await cartItemService.addToCartItemService(req.user, req.body);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    deleteCartItemById: async(req, res) => {
        try {
            const response = await cartItemService.deleteCartItemByIDService(req.user, req.body);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    deletAlleCartItem: async(req, res) => {
        try {
            const response = await cartItemService.deleteAllCartItemService(req.user);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

module.exports = cartController;
