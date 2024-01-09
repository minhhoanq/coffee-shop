'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Order.belongsTo(models.Status, {foreignKey: 'statusId', targetKey: 'id', as: 'statusData'});

      // Order.hasMany(models.Cart_Item, {
      //   foreignKey: 'cartId',
      //   sourceKey: "cartItemId"
      // })
    }
  }
  Order.init({
    userId: DataTypes.INTEGER,
    couponsId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    price:DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};