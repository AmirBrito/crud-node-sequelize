const Sequelize = require('sequelize');
const dbConfiguration = require('../config/database');
const User = require('../models/User');
const Product = require('../models/Product');

const connection = new Sequelize(dbConfiguration);

User.init(connection);

Product.init(connection);
Product.associate(connection.models);

module.exports = connection;