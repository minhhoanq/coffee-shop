const { Op } = require("sequelize");
const db = require('../models');

const getIngredientService = ({page, limit, order, name, ...query}) => new Promise( async(resolve, reject) => {
    try {
        const queries = {raw: true, nest: true};
        const offset = (!page || +page <= 1) ? 0 : (+page - 1);
        const flimit = +limit || +process.env.LIMIT_PRODUCT;
        queries.offset = offset * flimit;
        queries.limit = flimit;
        if(order) queries.order = [order];
        if(name) query.ingredientName = { [Op.substring]: name};
        const response = await db.Ingredient.findAndCountAll({
            where: query,
            ...queries,
            include: [
                {
                    model: db.Unit,
                    as: 'unitData',
                    attribute: ['id', 'unitName']
                }
            ]
        })

        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Lấy thành công.' : 'Lấy thất bại!',
            data: response
        });
    } catch (error) {
        reject(error);
    }
});

module.exports = { getIngredientService };