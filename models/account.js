'use strict';

module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    fullname: { type: DataTypes.STRING, unique: true, allowNull: false }, email: { type: DataTypes.STRING, unique: true, allowNull: false }, password: { type: DataTypes.STRING, allowNull: false },
    reference: { type: DataTypes.STRING, allowNull: false, unique: true }, points: { type: DataTypes.INTEGER, allowNull: false }, token: { type: DataTypes.STRING, allowNull: false, unique: true }, 
    updatedAt: { allowNull: false, type: DataTypes.DATE, defaultValue: DataTypes.NOW }, createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: true, defaultValue: '' }, city: { type: DataTypes.STRING, allowNull: true, defaultValue: '' }, zipcode: { type: DataTypes.STRING, allowNull: true, defaultValue: ''},
    phone: { type: DataTypes.STRING, allowNull: true, defaultValue: '' }, address2: { type: DataTypes.STRING, allowNull: true, defaultValue: '' },
  }, {});
  Account.associate = function(models) {
    Account.hasMany(models.Property);
  }; return Account;
};