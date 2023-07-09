'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Cart_Item.hasOne(models.Cart, {foreignKey: 'id', sourceKey: 'cartId', as: 'cartData'}),
      // Cart_Item.hasOne(models.Product_Size, {foreignKey: 'id', sourceKey: 'sizeId',as: 'sizeData'}),
      // Cart_Item.hasOne(models.Product_Size, {foreignKey: 'id', sourceKey: 'productId',as: 'productData'})
    }
  }
  Cart_Item.init({
    cartId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Cart_Item',
  });
  return Cart_Item;
};