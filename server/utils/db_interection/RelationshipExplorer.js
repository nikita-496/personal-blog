const db = require("../../db/db");

class RelationshipTableExplorer {
  _userId = null;
  _following = null;
  _followers = null;

  get userId() {
    return this._userId;
  }
  set userId(val) {
    return (this._userId = val);
  }

  get following() {
    return this._following;
  }
  set following(val) {
    return (this._following = val);
  }

  get followers() {
    return this._followers;
  }
  set followers(val) {
    return (this._followers = val);
  }

  async createRelationship() {
    const relationship = await db.query(
      "INSERT INTO relationship (following, followers, user_id) values($1, $2, $3)",
      [[""], [""], this.userId]
    );
    return relationship.rows[0];
  }

  async getRelationship(req, res) {
    const relationship = await db.query(`SELECT * FROM relationship`);
    return res.json(relationship.rows);
  }

  async getFollowing() {
    console.log(this.userId);
    const following = await db.query(
      "SELECT following FROM relationship WHERE user_id = $1",
      [this.userId]
    );
    return following.rows[0].following;
  }

  async getFollowers() {
    console.log(this.userId);
    const followers = await db.query(
      "SELECT followers FROM relationship WHERE user_id = $1",
      [this.userId]
    );
    return followers.rows[0].followers;
  }

  async updateRelationship() {
    return this.following
      ? await db.query(
          "UPDATE relationship SET following = $1 WHERE user_id = $2 RETURNING *",
          [this.following, this.userId]
        )
      : await db.query(
          "UPDATE relationship SET followers = $1 WHERE user_id = $2",
          [this.followers, this.userId]
        );
  }
}

module.exports = RelationshipTableExplorer;
