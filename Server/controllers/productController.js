const Product = require("../models/Product");

const productController = {
    //Get all product
    getAllProduct: async(req, res) => {
        try {
            const product = await Product.find();
            return res.status(200).json(product);
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

module.exports = productController;