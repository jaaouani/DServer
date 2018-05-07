'use strict';
module.exports = (sequelize, DataTypes) => {
  var Room = sequelize.define('Room', {
    name: { type: DataTypes.STRING, allowNull: false, defaultValue: '0' },
    surface: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }
  }, {});
  Room.associate = function(models) {
    Room.belongsTo(models.Property)
  };
  return Room;
};