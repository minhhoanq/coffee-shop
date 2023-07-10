const db = require("../models");
const { Op } = require("sequelize");

const getBooks = ({page, limit, order, name, ...query}) => new Promise(async (resolve, reject) => {
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
                mes: response ? "Got" : "Can't found product",
                productData: response
            })
        } catch (error) {
            reject(error);
        }
});

module.exports = {getBooks};