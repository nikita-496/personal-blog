const db = require("../../db/db");

class ForumTableExplorer {
  _title = null;
  _content = null;
  _userId = null;
  _id = null;

  get title() {
    return this._title;
  }
  set title(val) {
    return (this._title = val);
  }

  get content() {
    return this._content;
  }
  set content(val) {
    return (this._content = val);
  }

  get userId() {
    return this._userId;
  }
  set userId(val) {
    return (this._userId = val);
  }

  get id() {
    return this._id;
  }
  set id(val) {
    return (this._id = val);
  }

  async createForum() {
    const newForum = await db.query(
      "INSERT INTO forum (title, content, user_id) values($1, $2,$3) RETURNING *",
      [this.title, this.content, this.userId]
    );
    return newForum.rows[0];
  }

  async getForums() {
    const forums = await db.query("SELECT * FROM forum");
    return forums.rows;
  }

  async updateForum() {
    await db.query(
      "UPDATE forum SET title = $1, content = $2 WHERE id = $3 RETURNING *",
      [this.title, this.content, this.id]
    );
  }

  async deleteForum() {
    const forum = await db.query("DELETE FROM forum WHERE id = $1", [this.id]);
    return forum.rows[0];
  }

  async joinWithPersonLogin() {
    const personLogin = await db.query(
      `SELECT person.login
      FROM person
      INNER JOIN forum ON forum.user_id = person.id WHERE person.id = $1
    `,
      [this.userId]
    );
    return personLogin.rows[0];
  }
}

module.exports = ForumTableExplorer;
