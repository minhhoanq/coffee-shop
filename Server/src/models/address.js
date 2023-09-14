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
      Address.belongsTo(models.User, {foreignKey: 'userid', targetKey: 'id', as: 'userData'});
    
    }
  }
  Address.init({
    userid: DataTypes.INTEGER,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    city_province: DataTypes.STRING,
    district: DataTypes.STRING,
    address: DataTypes.STRING,
    address_instruction: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    is_delivery_address: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};