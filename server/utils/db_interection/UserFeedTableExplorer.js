const db = require("../../db/db");

class UserFeedTableExplorer {
  _id = null;
  _user_id = null;
  _idea = null;
  _forum_id = null;

  get id() {
    return this._id;
  }
  set id(val) {
    return (this._id = val);
  }

  get userId() {
    return this._user_id;
  }
  set userId(val) {
    return (this._user_id = val);
  }

  get idea() {
    return this._idea;
  }
  set idea(val) {
    return (this._idea = val);
  }

  get forumId() {
    return this._forum_id;
  }
  set forumId(val) {
    return (this._forum_id = val);
  }
  // При регитсрации нового пользователя
  // создается его лента с пустым содержимым
  async createFeed() {
    const newFeed = await db.query(
      "INSERT INTO user_feed (user_id) values($1)RETURNING *",
      [this.userId]
    );
    return newFeed;
  }

  async updateFeed() {
    const date = await db.query(
      "SELECT TO_CHAR(NOW() :: DATE, 'Mon dd, yyyy')"
    );
    const time = await db.query("SELECT LOCALTIMESTAMP(0) :: TIME");
    const updatedFeed = await db.query(
      "UPDATE user_feed SET idea = $1, forum_id = $2, date = $3, time = $4 WHERE id = $5 RETURNING *",
      [
        this.idea,
        this.forumId,
        date.rows[0].to_char,
        time.rows[0].localtimestamp,
        this.id,
      ]
    );
    return updatedFeed.rows[0];
  }

  async joinWithForum() {
    const forum = await db.query(
      `SELECT forum.title, forum.user_id, user_feed.date, user_feed.time
    FROM forum
    INNER JOIN user_feed ON user_feed.forum_id = forum.id WHERE forum.id = $1
    `,
      [this.forumId]
    );
    return forum.rows[0];
  }
}

module.exports = UserFeedTableExplorer;
