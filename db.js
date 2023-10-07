const pgp = require("pg-promise")();
const connection = {
  host: "localhost",
  port: 5432,
  database: "dvdrental",
  user: "wiwirahmadani",
  password: "belajar1234",
};

const db = pgp(connection);

module.exports = db;
