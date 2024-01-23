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
      // Cart_Item.hasOne(models.Product_Size, {foreignKey: 'id', sourceKey: 'productSizeId', as: 'productSizeData'}),
      // Cart_Item.hasOne(models.Cart, {foreignKey: 'id', sourceKey: 'cartId', as: 'cartData'}),

      // Cart_Item.belongsTo(models.Order, { foreignKey: "id" });
    }
  }
  Cart_Item.init({
    cartId: DataTypes.INTEGER,
    priceId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    note: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Cart_Item',
    indexes: [
      {
        unique: true,
        fields: ['cartId', 'productSizeId']
      }
    ]
  });
  return Cart_Item;
};