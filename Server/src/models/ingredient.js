'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ingredient.init({
    ingredientName: DataTypes.STRING,
    ingredientImage: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    unitId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};