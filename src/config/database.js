module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'mydb',
  password: '1234',
  database: 'api',
  define: {
    timestamp: true,
    underscored: true,
  }
};
