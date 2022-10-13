const Sequelize = require('sequelize');
const dbConfiguration = require('../config/database');

const connection = new Sequelize(dbConfiguration);

module.exports = connection;