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

    createProduct: async(req, res) => {
        try {
            // const response = await productService.createProductService(req.body, req.file);
            // return res.status(200).json(response);
            return res.status(200).json(req.body);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    //Post product to cart
    // postCartItem: async(req, res) => {
    //     try {
    //         const response = await cartItemService.postAddToCartItemService(req.body);
    //         return res.status(200).json(response);
    //     } catch (error) {
    //         return res.status(500).json(error);
    //     }
    // }
    // ,

    //Get cart item
    getCartItem: async(req, res) => {
        try {
            const response = await cartItemService.getCartItemByIDService(req.query);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    ratingProduct: async(req, res) => {
        try {
            const response = await productService.ratingProductService(req.user, req.params, req.body);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    getAllRatingsProduct: async(req, res) => {
        try {
            const response = await productService.getAllRatingsProductService(req.params);

            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    deleteRatingProduct: async(req, res) => {
        try {
            const response = await productService.deleteRatingProductService(req.user, req.params);

            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    uploadImageProduct: async(req, res) => {
        // console.log();
        return res.status(200).json(req.file.path);
    },

    // Recommended System Controller
    recommendSystemController: async(req, res) => {
        try {
            const response = await productService.recommendSystemService(req.user);

            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = productController;