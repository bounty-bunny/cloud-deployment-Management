// src/models/index.js
const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Example: Define a User model
db.User = require('./user')(sequelize, Sequelize);

module.exports = db;
