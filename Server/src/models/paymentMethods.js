'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentMethods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // PaymentMethods.belongsTo(models.Status, {foreignKey: 'statusId', targetKey: 'id', as: 'statusData'});

      // PaymentMethods.hasMany(models.Cart_Item, {
      //   foreignKey: 'cartId',
      //   sourceKey: "cartItemId"
      // })
    }
  }
  PaymentMethods.init({
    nameMethod: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PaymentMethods',
  });
  return PaymentMethods;
};