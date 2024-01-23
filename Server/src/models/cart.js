'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Cart.belongsToMany(models.Product_Size, {through: models.Cart_Item, foreignKey: 'cartId', targetKey: 'id', as: 'productSizeData'});
    }
  }
  Cart.init({
    userId: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};