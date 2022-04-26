const db = require("../db/db");

class PostController {
  async createPost(req, res) {
    const { tile, content, userId } = req.body;
    const newPost = await db.query(
      `INSERT INTO post (tile, content, user_id) values($1, $2, $3) RETURNING *`,
      [tile, content, userId]
    );
    res.json(newPost.rows[0]);
  }
  async getPosts(req, res) {
    const posts = await db.query("SELECT * FROM post");
    res.json(posts.rows);
  }
  async getPost(req, res) {
    const id = req.query.id;
    const posts = await db.query("SELECT * FROM post  where id = $1", [id]);
    res.json(posts.rows[0]);
  }
  async updatePost(req, res) {
    const { tile, content, user_id, id } = req.body;
    const post = await db.query(
      "UPDATE post set tile = $1, content = $2, user_id = $3 where id = $4 RETURNING *",
      [tile, content, user_id, id]
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
