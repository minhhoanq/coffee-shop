'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pr_Size_Ing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Pr_Size_Ing.belongsTo(models.Status, {foreignKey: 'statusId', targetKey: 'id', as: 'statusData'});

      // Pr_Size_Ing.hasMany(models.Cart_Item, {
      //   foreignKey: 'cartId',
      //   sourceKey: "cartItemId"
      // })
    }
  }
  Pr_Size_Ing.init({
    productSizeId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Pr_Size_Ing',
  });
  return Pr_Size_Ing;
};