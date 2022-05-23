const db = require("../../db/db");

class ImageTableExplorer {
  _postId = null;
  _userId = null;
  _typeImage = null;

  get postId() {
    return this._postId;
  }
  set postId(val) {
    return (this._postId = val);
  }

  get userId() {
    return this._userId;
  }
  set userId(val) {
    return (this._userId = val);
  }

  get typeImage() {
    return this._typeImage;
  }
  set typeImage(val) {
    return (this._typeImage = val);
  }

  async createImage(url) {
    let typeUrl;
    this.typeImage === "header"
      ? (typeUrl = "url_post_header")
      : this.typeImage === "avatar" ? (typeUrl = "url_avatar")
      : (typeUrl = "url");
    const newImage = await db.query(
      `INSERT INTO images (${typeUrl}, post_id, user_id) values($1, $2, $3) RETURNING *`,
      [url, this.postId, this.userId]
    );
    return newImage.rows[0];
  }

  async getImage(req, res) {
    const images = await db.query("SELECT * FROM images");
    res.json(images.rows);
  }

  async getPostHeaaderImage(req, res) {
    const image = await db.query(
      "SELECT url_post_header FROM images WHERE post_id = $1",
      [this.postId]
    );
    return image.rows[0].url_post_header;
  }

  /*async updateImage(res, req) {
    const { post_id } = req.body;
    const updatedImage = await db.query(
      "UPDATE images set post_id = $1 where id = $2 RETURNING *",
      [post_id, id]
    );
    res.json(updatedImage.rows[0]);
  }*/

  async deleteImage(req, res) {
    const id = req.params.id;
    const image = await db.query("DELETE FROM images WHERE id = $1", [id]);
    res.json(image.rows[0]);
  }
}

module.exports = new ImageTableExplorer();
