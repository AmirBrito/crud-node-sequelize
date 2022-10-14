const Sequelize = require('sequelize');
const dbConfiguration = require('../config/database');
const User = require('../models/User');

const connection = new Sequelize(dbConfiguration);

User.init(connection);

module.exports = connection;