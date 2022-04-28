const db = require("../db/db");

class PersonTableExplorer {
  _loginForSelect = null;
  _columnValues = null;
  _id = null;

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
}

module.exports = PersonTableExplorer;
