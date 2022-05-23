const db = require("../../db/db");

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

  async joinWithProfile() {
    const profile = await db.query(
      `SELECT person.id, person.name, person.surname, person.login, person.email, profile.avatar
       FROM person 
       INNER JOIN profile ON profile.user_id = person.id WHERE login = $1
      `,
      [this.loginForSelect]
    );
    return profile;
  }

  async join() {
    const userRoles = await db.query(
      `SELECT user_roles.role_id
       FROM person 
       INNER JOIN user_roles ON user_roles.user_id = person.id WHERE login = $1
      `,
      [this.loginForSelect]
    );
    const profile = await this.joinWithProfile(this.loginForSelect);
    const roles = userRoles.rows.map((role) => role.role_id);
    return [{ ...profile.rows[0], roles }];
  }

  async joinWithComment() {
    const comment = await db.query(
      `SELECT comment.content, comment.post_id, comment.forum_id, comment.publication_date, comment.publication_time
      FROM person
      INNER JOIN comment ON comment.user_id = person.id WHERE login = $1        
      `,
      [this.loginForSelect]
    );
    const profile = await this.joinWithProfile(this.loginForSelect);
    return { ...profile.rows[0], ...comment.rows[0] };
  }
}

module.exports = PersonTableExplorer;
