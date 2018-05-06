'use strict';
module.exports = {
  up: (queryInterface, _sequelize) => { return queryInterface.createTable('Accounts', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: _sequelize.INTEGER }, token: { allowNull: false, type: _sequelize.STRING, unique: true },
      fullname: { type: _sequelize.STRING, unique: true, allowNull: false }, email: { type: _sequelize.STRING, unique: true, allowNull: false },
      password: { type: _sequelize.STRING, allowNull: false }, reference: { type: _sequelize.STRING, allowNull: false, unique: true }, points: { type: _sequelize.INTEGER, allowNull: false },
      createdAt: { allowNull: false, type: _sequelize.DATE, defaultValue: _sequelize.NOW }, updatedAt: { type: _sequelize.DATE, defaultValue: _sequelize.NOW, allowNull: false },
      address: { type: _sequelize.STRING, allowNull: true, defaultValue: '' }
    });
  },
  down: (queryInterface, _sequelize) => { return queryInterface.dropTable('Accounts'); }
};