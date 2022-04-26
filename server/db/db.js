const Pool = require("pg").Pool;
const password = require("../config/password");

const pool = new Pool({
  user: "postgres",
  password,
  host: "localhost",
  port: 5432,
  database: "blog",
});

module.exports = pool;
