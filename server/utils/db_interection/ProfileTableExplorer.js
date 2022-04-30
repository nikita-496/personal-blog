const db = require("../../db/db");

class ProfileTableExplorer {
  async createProfile() {
    //Каждый зарегистрированный пользователь имеет свой профиль
    const profile = await db.query(
      `INSERT INTO profile (avatar) values('1.jpg')`
    );
  }

  async getLastProfile() {
    const profile = await db.query(`SELECT * FROM profile`);
    return profile.rows[profile.rows.length - 1];
  }
}

module.exports = ProfileTableExplorer;
