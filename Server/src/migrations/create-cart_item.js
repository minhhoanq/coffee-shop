'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cart_Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cartId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: "unique_tag",
      },
      priceId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: "unique_tag",
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      note: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    },
    {uniqueKeys: {
      unique_tag: {
        customIndex: true,
        fields: ["cartId", "priceId"]
      }}});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cart_Items');
  }
};