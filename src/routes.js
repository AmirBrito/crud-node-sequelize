const express = require('express');
const routes = express.Router();
const UserController = require('../src/controllers/UserController');
const ProductController = require('../src/controllers/ProductController');

routes.get('/', (req, res) => {
  return res.json({ hello: 'World'});
})

// User routes
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

// Product routes
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);

module.exports = routes;