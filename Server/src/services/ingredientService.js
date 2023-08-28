const db = require('../models');

const getIngredientService = () => new Promise( async(resolve, reject) => {
    try {

        const response = await db.Ingredient.findAll();

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