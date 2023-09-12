'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Addresses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_Addresses.hasOne(models.User, {foreignKey: 'id', sourceKey: 'userid', as: 'userData'}),
      User_Addresses.hasOne(models.Address, {foreignKey: 'id', sourceKey: 'addressid', as: 'addressData'})
    }
  }
  User_Addresses.init({
    userid: DataTypes.INTEGER,
    addressid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_Addresses',
  });
  return User_Addresses;
};