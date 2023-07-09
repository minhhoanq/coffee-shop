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
      Product_Size.hasOne(models.Product, {foreignKey: 'id', sourceKey: 'productId', as: 'productData'}),
      Product_Size.hasOne(models.Size, {foreignKey: 'id', sourceKey: 'sizeId',as: 'sizeData'})
      
      // Product_Size.belongsToMany(models.Cart, {through: models.Cart_Item, foreignKey: 'cartId', targetKey: 'id', as: 'cartData'});
    }
  }
  Product_Size.init({
    productId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product_Size',
  });
  return Product_Size;
};