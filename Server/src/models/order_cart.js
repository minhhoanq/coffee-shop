'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Order_Cart.belongsTo(models.Status, {foreignKey: 'statusId', targetKey: 'id', as: 'statusData'});

      // Order_Cart.hasMany(models.Cart_Item, {
      //   foreignKey: 'cartId',
      //   sourceKey: "cartItemId"
      // })
    }
  }
  Order_Cart.init({
    orderId: DataTypes.INTEGER,
    cartId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Order_Cart',
  });
  return Order_Cart;
};