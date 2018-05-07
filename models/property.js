'use strict';
module.exports = (sequelize, DataTypes) => {
  var Property = sequelize.define('Property', {
    name: { type: DataTypes.STRING, unique: true, allowNull: false }, description: { type: DataTypes.TEXT, allowNull: false, defaultValue: '' },
    updatedAt: { allowNull: false, type: DataTypes.DATE, defaultValue: DataTypes.NOW }, createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, allowNull: false },
    email: { type: DataTypes.STRING, index: true }, logement: { type: DataTypes.ENUM('maison', 'appartement'), allowNull: false, defaultValue: 'appartement' },
    location: { type: DataTypes.ENUM('meuble', 'vide'), allowNull: false, defaultValue: 'vide' }, address : { type: DataTypes.STRING, allowNull: false, defaultValue: '', }, surface : { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  }, {});
  Property.associate = function(models) {
    Property.belongsTo(models.Account);
  };
  return Property;
};