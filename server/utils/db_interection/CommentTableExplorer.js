const db = require("../../db/db");

class CommentTableExplorer {
  _content = null;
  _post_id = null;
  _forum_id = null;
  _id = null;

  get content() {
    return this._content;
  }
  set content(val) {
    return (this._content = val);
  }

  get postId() {
    return this._post_id;
  }
  set postId(val) {
    return (this._post_id = val);
  }

  get forumId() {
    return this._forum_id;
  }
  set forumId(val) {
    return (this._forum_id = val);
  }

  get id() {
    return this._id;
  }
  set id(val) {
    return (this._id = val);
  }

  async createComment() {
    console.log(this.content, this.postId)
    const date = await db.query("SELECT TO_CHAR(NOW() :: DATE, 'Mon dd, yyyy')");
    const time = await db.query("SELECT LOCALTIMESTAMP(0) :: TIME");

    const newComment = await db.query(
      "INSERT INTO comment (content, post_id, forum_id, publication_date, publication_time) values($1, $2, $3, $4, $5) RETURNING *",
      [this.content, this.postId, this.forumId,  date.rows[0].to_char, time.rows[0].localtimestamp]
    );
    return newComment.rows[0];
  }

  async getComments() {
    const comments = await db.query("SELECT * FROM comment")
    return comments.rows
  }

  async updateComments() {
    const date = await db.query("SELECT TO_CHAR(NOW() :: DATE, 'Mon dd, yyyy')");
    const time = await db.query("SELECT LOCALTIMESTAMP(0) :: TIME");

    await db.query(
      "UPDATE comment SET content = $1, publication_date = $2, publication_time =$3 WHERE id = $4 RETURNING *",
      [this.content,  date.rows[0].to_char, time.rows[0].localtimestamp, 
      this.id]
    )
  }

  async deleteComment() {
    const forum = await db.query("DELETE FROM comment WHERE id = $1", [this.id]);
    return forum.rows[0];
  }
}

module.exports = CommentTableExplorer;
