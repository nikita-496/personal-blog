const db = require("../db/db");
class UserController {
  async createUser(userData) {
    const { name, surname, login, password } = userData;
    const newPerson = await db.query(
      `INSERT INTO person (name, surname, login, password) values($1, $2, $3, $4) RETURNING *`,
      [name, surname, login, password]
    );
  }
  async getUsers(req, res) {
    const users = await db.query("SELECT * FROM person");
    res.json(users.rows);
  }
  async getUser(req, res) {
    const id = req.params.id;
    const users = await db.query("SELECT * FROM person where id = $1", [id]);
    res.json(users.rows[0]);
  }
  async updateUser(req, res) {
    const { id, name, surname, login, password } = req.body;
    const user = await db.query(
      "UPDATE person set name = $1, surname = $2, login = $3, password = $4 where id = $5 RETURNING *",
      [name, surname, login, password, id]
    );
    res.json(user.rows[0]);
  }
  async deleteUser(req, res) {
    const id = req.params.id;
    const user = await db.query("DELETE FROM person where id = $1", [id]);
    res.json(user.rows[0]);
  }
}

module.exports = new UserController();
