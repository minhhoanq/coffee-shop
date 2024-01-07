'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init({
    shipId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    couponsId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    amount: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};