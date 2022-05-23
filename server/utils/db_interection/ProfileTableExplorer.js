const db = require("../../db/db");

class ProfileTableExplorer {
  _id = null;
  _foreignId = null;

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
  async createProfile() {
    //Каждый зарегистрированный пользователь имеет свой профиль
    const profile = await db.query(
      `INSERT INTO profile (avatar) values('default')`
    );
  }

  async getLastProfile() {
    const profile = await db.query(`SELECT * FROM profile`);
    return profile.rows[profile.rows.length - 1];
  }

  async writeForeignId() {
    await db.query(
      "UPDATE profile SET user_id = $1 WHERE id = $2 RETURNING *",
      [this.foreignId, this.id]
    );
  }

  async updateProfile(avatar) {
    console.log(avatar, this.id)
    await db.query("UPDATE profile SET avatar = $1 WHERE user_id = $2 RETURNING *", [
      avatar,
      this.id,
    ]);
  }

  async deleteProfile(req, res) {
    const id = req.params.id;
    const post = await db.query("DELETE FROM profile where id = $1", [id]);
    return res.json(post.rows[0]);
  }
}

module.exports = ProfileTableExplorer;
