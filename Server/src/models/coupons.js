'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coupons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Coupons.belongsTo(models.Status, {foreignKey: 'statusId', targetKey: 'id', as: 'statusData'});

      // Coupons.hasMany(models.Cart_Item, {
      //   foreignKey: 'cartId',
      //   sourceKey: "cartItemId"
      // })
    }
  }
  Coupons.init({
    code: DataTypes.STRING,
    couponsCondition: DataTypes.STRING,
    discountAmount: DataTypes.DOUBLE,
    discountPercentage: DataTypes.DOUBLE,
    maxAmount: DataTypes.DOUBLE,
    isActive: DataTypes.BOOLEAN,
    amount: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Coupons',
  });
  return Coupons;
};


//  Id    code        couponsCondition      discountAmount      discountPercentage      maxAmount       startDate    endDate    isActive    amount
//  1     noel20      trà sữa               null                0.8                     10000           22-12        27-12      true        100
//  1     noel30      trà                   null                0.7                     15000           22-12        27-12      true        100
//  1     tet50       cà phê                null                0.5                     20000           01-01        10-01      true        100
//  2     hoadon100   hóa đơn trên 100k     10000               10000                   10000           01-01        01-01      true        100
//  3     hoadon200   hóa đơn trên 200k     20000               20000                   20000           01-01        01-01      true        100
//  4     hoadon400   hóa đơn trên 400k     40000               40000                   40000           01-01        01-01      true        100