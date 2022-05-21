const db = require("../../db/db");

class ImageTableExplorer {
  async createImage(url) {
    const newImage = await db.query(
      "INSERT INTO images (url) values($1) RETURNING *",
      [url]
    );
    return newImage.rows[0];
  }
  async getImage(req, res) {
    const users = await db.query("SELECT * FROM images");
    res.json(users.rows);
  }
  async deleteImage(req, res) {
    const id = req.params.id;
    const image = await db.query("DELETE FROM images WHERE id = $1", [id]);
    res.json(image.rows[0]);
  }
}

module.exports = new ImageTableExplorer();
