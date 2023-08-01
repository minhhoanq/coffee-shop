'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {foreignKey: 'categoryId', targetKey: 'id', as: 'categoryData'});

      Product.belongsToMany(models.Size, {through: models.Product_Size, foreignKey: 'productId', targetKey: 'id', as: 'sizeData'});
    }
  }
  Product.init({
    productName: DataTypes.STRING,
    slug: DataTypes.STRING,
    productImg: DataTypes.STRING,
    categoryId: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    productDescription: DataTypes.STRING,
    sold: DataTypes.INTEGER,
    ratings: [
      {
        star: DataTypes.INTEGER,
        postedBy: DataTypes.INTEGER,
        comment: DataTypes.STRING
      }
    ],
    totalRatings: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};