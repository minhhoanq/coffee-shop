const db = require("../models");
const { Op } = require("sequelize");

const getProductsService = ({page, limit, order, name, ...query}) => new Promise(async (resolve, reject) => {
        try {
            const queries = { raw: true, nest: true};
            const offset = (!page || +page <=1) ? 0 : (+page - 1);
            const flimit = +limit || +process.env.LIMIT_PRODUCT;
            queries.offset = offset * flimit;
            queries.limit = flimit;
            if(order) queries.order = [order];
            if(name) query.productName = { [Op.substring]: name };
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
            resolve({
                err: response ? 0 : 1,
                mes: response ? "Thành công!" : "Thất bại!",
                productData: response
            })
        } catch (error) {
            reject(error);
        }
});

const getProductDetailService = ({id}) => new Promise(async(resolve, reject) => {
    try {
        console.log("id :" + id);
        const response = await db.Product_Size.findAll({
            where: {productId: id},
            attributes: ['id'],
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

        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Thành công!' : 'Lỗi',
            dataDetailProduct: response,
        });
    } catch (error) {
        reject(error);
    }
})

const getProductByCategoryService = ({categoryId}) => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Product.findAll({
            where: {categoryId},
            include: [
                {
                    model: db.Category,
                    as: 'categoryData',
                    attributes: ['id', 'categoryName'],
                }
            ]
        });
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Thành công!' : 'Thất bại!',
            dataProductByCategory: response,
        })
    } catch (error) {
        reject(error);
    }
})

module.exports = { getProductsService, getProductDetailService, getProductByCategoryService };