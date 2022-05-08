const db = require("../db/db");

class PostController {
  async createPost(req, res) {
    const { title, content, user_id } = req.body;
    const newPost = await db.query(
      `INSERT INTO post (title, content, user_id) values($1, $2, $3) RETURNING *`,
      [title, content, user_id]
    );
    res.json(newPost.rows[0]);
  }
  async getPosts() {
    return await db.query("SELECT * FROM post");
  }

  async getPost(req, res) {
    const id = req.params.id;
    const post = await db.query("SELECT * FROM post  where id = $1", [id]);
    res.json(post.rows);
  }
  async updatePost(req, res) {
    const { title, content, user_id, id } = req.body;
    const post = await db.query(
      "UPDATE post set title = $1, content = $2, user_id = $3 where id = $4 RETURNING *",
      [title, content, user_id, id]
    );
    res.json(post.rows[0]);
  }
  async deletePost(req, res) {
    const id = req.params.id;
    const post = await db.query("DELETE FROM post where id = $1", [id]);
    res.json(post.rows[0]);
  }
}

module.exports = new PostController();
