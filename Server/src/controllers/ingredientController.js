const { getIngredientService } = require("../services/ingredientService");


const ingredientController = {
    getIngredient : async(req, res) => {
        try {
            const response = await getIngredientService(req.query);

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    },


}

module.exports = ingredientController;