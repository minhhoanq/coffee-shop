'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Product_Size.belongsToMany(models.Product, {through: Product_Size, foreignKey: 'productId'}),
      // Product_Size.belongsToMany(models.Size, {through: Product_Size, foreignKey: 'sizeId'})
    }
  }
  Product_Size.init({
    productId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product_Size',
  });
  return Product_Size;
};