'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Product_Sizes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: "unique_tag",
      }, 
      sizeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: "unique_tag",
      },
      recipeId: {
        type: Sequelize.INTEGER,
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
        fields: ["productId", "sizeId"]
      }}});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Product_Sizes');
  }
};