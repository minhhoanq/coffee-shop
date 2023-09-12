'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.belongsToMany(models.User, {through: models.User_Addresses, foreignKey: 'addressid', targetKey: 'id', as: 'addressData'});
    }
  }
  Address.init({
    address: DataTypes.STRING,
    address_instruction: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    district: DataTypes.STRING,
    postal_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};