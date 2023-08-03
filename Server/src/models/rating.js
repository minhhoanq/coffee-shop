'use strict';
const crypto = require("crypto");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      Rating.hasOne(models.Product, {foreignKey: 'id', sourceKey: 'productId', as: 'productData'}),
      Rating.hasOne(models.User, {foreignKey: 'id', sourceKey: 'userId',as: 'userData'})
    }
  }
  Rating.init({
    star: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};