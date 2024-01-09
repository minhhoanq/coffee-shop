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
    minValue: DataTypes.DOUBLE,
    minPrice: DataTypes.DOUBLE,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Coupons',
  });
  return Coupons;
};