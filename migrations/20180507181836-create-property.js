'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Properties', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      name: { type: Sequelize.STRING, unique: true, allowNull: false }, description: { type: Sequelize.TEXT, allowNull: false, defaultValue: '' },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }, createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW, allowNull: false },
      email: { type: Sequelize.STRING, index: true }, logement: { type: Sequelize.ENUM('maison', 'appartement'), allowNull: false, defaultValue: 'appartement' },
      location: { type: Sequelize.ENUM('meuble', 'vide'), allowNull: false, defaultValue: 'vide' },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Properties');
  }
};