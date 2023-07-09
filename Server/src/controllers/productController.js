const db = require("../models");
const { Op } = require("sequelize");

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
    //Get product by name, page, limit, order
    getProducts: async(req, res) => {
        try {
            const page = req.body.page;
            const limit = req.body.limit;
            const order = req.body.order;
            const name = req.body.name;
            const query = req.query;

            console.log("page: " + page + "/" + "limit: " + limit + "/" + "order: " + order + "/" + "name: " + name);
            console.log(query);
            const queries = { raw: true, nest: true};
            const offset = (!page || +page <=1) ? 0 : (+page - 1);
            const flimit = +limit || +process.env.LIMIT_PRODUCT;
            queries.offset = offset * flimit;
            queries.limit = flimit;
            if(order) queries.order = [order];
            if(name) query.productName = { [Op.substring]: name }
            const response = await db.Product.findAndCountAll({
                where: query,
                ...queries,
                include: [
                    {
                        model: db.Category,
                        as: 'categoryData',
                        attributes: ['id', 'categoryName'],
                    }
                ]
            });
            return res.status(200).json({status: 'Success', data: response});
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
                        attributes: ['id', 'productName', 'categoryId', 'productDescription', 'productImg', 'price'],
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
                        attributes: ['id', 'sizeName', 'sizePriceModifier'],
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