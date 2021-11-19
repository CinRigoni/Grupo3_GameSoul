'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      stock: {
        type: Sequelize.INTEGER
      },
      stockMin: {
        type: Sequelize.INTEGER
      },
      stockMax: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      categoriesId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'categories',
          key: 'id'
        }
      },
      visibilitiesId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'visibilities',
          key: 'id'
        }
      },
      artistsId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'artists',
          key: 'id'
        }
      },
      recordCompaniesId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'recordcompanies',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};