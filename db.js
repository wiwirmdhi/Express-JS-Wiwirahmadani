const pgp = require('pg-promise')();
const connection = {
  host: 'localhost',
  port: 5432,
  database: 'dvdrental', 
  user: 'username', 
  password: 'password' 
};

const db = pgp(connection);

module.exports = db;
