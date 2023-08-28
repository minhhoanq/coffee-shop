'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe_Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipe_Ingredient.init({
    recipeId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Recipe_Ingredient',
  });
  return Recipe_Ingredient;
};