'use strict';

const filesystem = require('fs'); const path = require('path');
const Sequelize = require('sequelize'); const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development'; const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

filesystem.readdirSync(__dirname).filter(file => { return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'); })
  .forEach(file => { const model = sequelize['import'](path.join(__dirname, file)); db[model.name] = model; });

Object.keys(db).forEach(_name => { if (db[_name].associate) { db[_name].associate(db); } });
db.sequelize = sequelize; db.Sequelize = Sequelize; module.exports = db;
