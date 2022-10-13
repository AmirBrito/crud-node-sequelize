module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'test',
  password: '1234',
  database: 'node-sequelize',
  define: {
    timestamp: true,
    underscored: true,
  }
};
