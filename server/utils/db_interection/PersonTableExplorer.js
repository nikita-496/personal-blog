const db = require("../../db/db");

class PersonTableExplorer {
  _loginForSelect = null;
  _columnValues = null;
  _id = null;
  _foreignId = null;

  get loginForSelect() {
    return this._loginForSelect;
  }
  set loginForSelect(val) {
    return (this._loginForSelect = val);
  }

  get columnValues() {
    return this._columnValues;
  }
  set columnValues(val) {
    return (this._columnValues = val);
  }

  get id() {
    return this._id;
  }
  set id(val) {
    return (this._id = val);
  }

  get foreignId() {
    return this._foreignId;
  }

  set foreignId(val) {
    return (this._foreignId = val);
  }

  async selectLogin() {
    return await db.query("SELECT login FROM person");
  }

  async selectPwdByLogin() {
    return await db.query(`SELECT password FROM person WHERE login = $1`, [
      this.loginForSelect,
    ]);
  }

  async getId() {
    return await db.query(`SELECT id FROM person WHERE login = $1`, [
      this.loginForSelect,
    ]);
  }
  async writeToken() {
    return await db.query(
      "UPDATE person set refresh_token = $1 WHERE id = $2 RETURNING *",
      [this.columnValues, this.id]
    );
  }

  async getUserByToken() {
    return await db.query(`SELECT * FROM person WHERE refresh_token LIKE $1`, [
      this.columnValues,
    ]);
  }
  async deleteToken() {
    await db.query(
      "UPDATE person SET refresh_token = '' WHERE id = $1 RETURNING *",
      [this.id]
    );
  }

  async joinWithUserProfile() {
    return await db.query(
      `SELECT person.id, person.name, person.surname, person.login, person.email, profile.avatar
       FROM person 
       INNER JOIN profile ON profile.id = person.profile_id WHERE login = $1
      `,
      [this.loginForSelect]
    );
  }

  async writeForeignId() {
    await db.query(
      "UPDATE person SET profile_id = $1 WHERE id = $2 RETURNING *",
      [this.foreignId, this.id]
    );
  }
}

module.exports = PersonTableExplorer;
