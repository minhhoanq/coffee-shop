const db = require("../models");
const productService = require("../services/productService");
const cartItemService = require("../services/cartItemService");

const productController = {
    //Get product by name, page, limit, order
    getProducts: async(req, res) => {
        try {
            const response = await productService.getProductsService(req.query);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    
    //Get product detail by id
    getProductDetail: async(req, res) => {
        try {
            const response = await productService.getProductDetailService(req.params);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(200).json(error);
        }
    },

    //Get products by categoryid
    getProductByCategory: async(req, res) => {
        try {
            const response = await productService.getProductByCategoryService(req.query)
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    //Post product to cart
    postCartItem: async(req, res) => {
        try {
            const response = await cartItemService.postAddToCartItemService(req.body);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    ,

    //Get cart item
    getCartItem: async(req, res) => {
        try {
            const response = await cartItemService.getCartItemByIDService(req.query);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = productController;