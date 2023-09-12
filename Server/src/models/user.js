'use strict';
const crypto = require("crypto");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    createPasswordChangedToken() {
      const resetToken = crypto.randomBytes(32).toString('hex');
      this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
      this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
      return resetToken;
    }

    static associate(models) {
      // define association here

      //User with Product M:N => Rating
      User.belongsToMany(models.Product, {through: models.Rating, foreignKey: 'userId', targetKey: 'id', as: 'productData'});
      User.belongsToMany(models.Address, {through: models.User_Addresses, foreignKey: 'userid', targetKey: 'id', as: 'userData'});
    }
  }
  User.init({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    image: DataTypes.STRING,
    roles: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    phone: DataTypes.STRING,
    birth: DataTypes.STRING,
    address: DataTypes.STRING,
    refreshToken: DataTypes.STRING,
    passwordChangedAt: DataTypes.STRING,
    passwordResetToken: DataTypes.STRING,
    passwordResetExpires: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    paranoid: true,
  });

  // User.build = {
  //   createPasswordChangedToken: function() {
  //     const resetToken = crypto.randomBytes(32).toString('hex');
  //     User.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  //     User.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  //     console.log("passwordResetToken : " + User.passwordResetToken);
  //     console.log("passwordResetExpires : " + User.passwordResetExpires);
  //     return resetToken;
  //   }
  // }
  return User;
};