const db = require("../models")

const productController = {
    //Get all product
    getAllProduct: async(req, res) => {
        try {
            const product = await db.Product.findAll({
                include: [
                    {
                        model: db.Category,
                        as: 'categoryData',
                        attributes: ['id', 'categoryName'],
                    }
                ]
            });

            if(!product) {
                return res.status(401).json("Product is not valid!")
            }
            return res.status(200).json({status: "Get product success", data: product});
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getProductDetail: async(req, res) => {
        try {
            const detail = await db.Product_Size.findAll({
                where: {productId: req.body.productId},
                attributes: {
                },
                include: [
                    {
                        model: db.Product,
                        as: 'productData',
                        attributes: ['id', 'productName', 'categoryId', 'productDescription', 'productImg'],
                        include: [
                            {
                                model: db.Category,
                                as: 'categoryData',
                                attributes: ['id', 'categoryName'],
                            }
                        ]
                    },
                    {
                        model: db.Size,
                        as: 'sizeData',
                        attributes: ['id', 'sizeName'],
                    }
                ]
            });

            return res.status(200).json({status: "Success!", data: detail});
        } catch (error) {
            return res.status(200).json(error);
        }
    },
    getProductByCategory: async(req, res) => {
        try {
            const product = await db.Product.findAll({
                where: {categoryId: req.body.categoryId},
                include: [
                    {
                        model: db.Category,
                        as: 'categoryData',
                        attributes: ['id', 'categoryName'],
                    }
                ]
            });
            return res.status(200).json({status: 'Success!', data: product});
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = productController;