const { where } = require("sequelize");
const db = require("../models")

const productController = {
    //Get all product
    getAllProduct: async(req, res) => {
        try {
            console.log(req.body.categoryId);

            // const product = await db.Product.findOne({where: {categoryId: req.body.categoryId}});
            const product = await db.Product.findByPk(1);
            if(!product) {
                return res.status(401).json("Product is not valid!")
            }

            return res.status(200).json({status: "Get product success", data: product});
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = productController;