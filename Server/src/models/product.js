'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {foreignKey: 'categoryId', targetKey: 'id', as: 'categoryData'});

      Product.belongsToMany(models.Size, {through: models.Product_Size, foreignKey: 'productId', targetKey: 'id', as: 'sizeData'});
    }
  }
  Product.init({
    productName: DataTypes.STRING,
    productImg: DataTypes.STRING,
    categoryId: DataTypes.STRING,
    productDescription: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};