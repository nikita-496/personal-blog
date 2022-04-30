const db = require("../../db/db");

class RoleTableExplorer {
  //Ключ на который ссылается внешний ключ данной таблицы
  _id = null;
  _targetUserId = null;

  get id() {
    return this._id;
  }
  set id(val) {
    return (this._id = val);
  }

  async getAllRoleValue() {
    const roleValue = await db.query("SELECT value FROM role");
    return roleValue;
  }

  async getRoleValue() {
    const roleValue = await db.query(
      `SELECT value FROM role WHERE id = ${this.id}`
    );
    return roleValue;
  }
}

module.exports = RoleTableExplorer;
