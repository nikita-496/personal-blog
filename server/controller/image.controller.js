const db = require("../db/db");

class ImageController {
  async createImage(req, res) {
    console.log(req.body);
    const { url } = req.body;
    const newImage = await db.query(
      "INSERT INTO images (url) values($1) RETURNING *",
      [url]
    );

    console.log(newImage.rows[0]);
    res.json(newImage.rows[0]);
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

module.exports = new ImageController();
