'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Product_Sizes', {
      productId: {
        primaryKey: true,
        allowNull: false,
        references: {
          model: "Product",
          key: "productId"
        }
      },
      sizeId: {
        primaryKey: true,
        allowNull: false,
        references: {
          model: "Size",
          key: "sizeId"
        }
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Product_Sizes');
  }
};