const db = require("../../db/db");

class UserRolesTableExplorer {
  //Ключ на который ссылается внешний ключ данной таблицы
  _targetRoleId = null;
  _targetUserId = null;

  get targetRoleId() {
    return this._targetRoleId;
  }
  set targetRoleId(val) {
    return (this._targetRoleId = val);
  }

  get targetUserId() {
    return this._targetUserId;
  }
  set targetUserId(val) {
    return (this._targetUserId = val);
  }
  async createUserRole() {
    //Каждый зарегистрированный пользователь наделяется правами User,
    //где 3 - id роли User
    this.targetRoleId = 3;
    const newUserRole = await db.query(
      `INSERT INTO user_roles (user_id, role_id) values(${this.targetUserId}, ${this.targetRoleId})`
    );
    return newUserRole.rows[0];
  }

  async getRoleId() {
    const roleId = await db.query(
      `SELECT role_id FROM user_roles WHERE user_id = ${this.targetUserId}`
    );
    return roleId;
  }
}

module.exports = UserRolesTableExplorer;
