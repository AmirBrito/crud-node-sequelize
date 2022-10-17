const Product = require('../models/Product');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const products = await Product.findAll();

    return res.json(products);
  },

  async store(req, res) {
    const { user_id, name } = req.body;

    const user = await User.findByPk(user_id);
    if(!user) {
      return res.status(400).json({ error: 'User not found'});
    }

    const product = await Product.create({ name, user_id })
    return res.json(product);
  }
};