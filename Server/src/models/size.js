'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Size.belongsToMany(models.Product, {through: models.Product_Size, foreignKey: 'sizeId', targetKey: 'id', as: 'productData'});
    }
  }
  Size.init({
    sizeName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Size',
  });
  return Size;
};