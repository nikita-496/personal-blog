const db = require("../db/db");
class UserController {
  async createUser(userData) {
    const { name, surname, login, password, email } = userData;
    const newPerson = await db.query(
      "INSERT INTO person (name, surname, login, password, email) values($1, $2, $3, $4, $5) RETURNING *",
      [name, surname, login, password, email]
    );
    return newPerson.rows[0];
  }
  async getUsers(req, res) {
    const users = await db.query("SELECT * FROM person");
    res.json(users.rows);
  }
  async getUser(req, res) {
    const id = req.params.id;
    const users = await db.query("SELECT * FROM person WHERE id = $1", [id]);
    res.json(users.rows[0]);
  }
  async updateUser(req, res) {
    const { id, name, surname, login, password, email } = req.body[0];
    const user = await db.query(
      "UPDATE person set name = $1, surname = $2, login = $3, password = $4, email = $5 WHERE id = $6 RETURNING *",
      [name, surname, login, password, email, id]
    );
    res.json(user.rows[0]);
  }
  async deleteUser(req, res) {
    const id = req.params.id;
    const userRoles = await db.query(
      "DELETE FROM user_roles WHERE user_id = $1",
      [id]
    );
    const user = await db.query(
      "DELETE FROM person WHERE id = $1 RETURNING *",
      [id]
    );
    res.json(user.rows[0]);
  }
}

module.exports = new UserController();
