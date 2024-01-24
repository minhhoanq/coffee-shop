'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Import extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Import.init({
    wareHouseId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    supplierId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Import',
  });
  return Import;
};