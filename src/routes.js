const express = require('express');
const routes = express.Router();
const UserController = require('../src/controllers/UserController');

routes.get('/', (req, res) => {
  return res.json({ hello: 'World'});
})

// User routes
routes.post('/users', UserController.store);

module.exports = routes;