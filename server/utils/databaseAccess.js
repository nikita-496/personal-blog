const db = require("../db/db");

const selectLogin = async () => await db.query("SELECT login FROM person");
const selectPsdByLogin = async (login) =>
  await db.query(`SELECT password FROM person WHERE login = $1`, [login]);

module.exports = { selectLogin, selectPsdByLogin };
