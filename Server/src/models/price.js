'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Price.hasOne(models.Product_Size, {foreignKey: 'id', sourceKey: 'productSizeId', as: 'productSizePrice'})
    }
  }
  Price.init({
    productSizeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Price',
  });
  return Price;
};