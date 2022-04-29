const PersonTableExplorer = require("./PersonTableExplorer");
const RoleTableExplorer = require("./RoleTableExplorer");
const UserRolesTableExplorer = require("./UserRolesTableExplorer");

async function defineUserRoles(foundLogin) {
  let roles = [];
  const defineCurrentUserId = async () => {
    const personExplorer = new PersonTableExplorer();
    personExplorer.loginForSelect = foundLogin;
    const queryResult = await personExplorer.getId();
    const currentUserId = queryResult.rows[0].id;
    return currentUserId;
  };
  const currentUserId = await defineCurrentUserId();

  const defineCurrentUserRolesId = async () => {
    const userRolesExplorer = new UserRolesTableExplorer();
    userRolesExplorer.targetUserId = currentUserId;
    const queryResult = await userRolesExplorer.getRoleId();
    const currentUserRolesId = queryResult.rows;
    return currentUserRolesId;
  };
  const currentUserRolesId = await defineCurrentUserRolesId();

  const roleExplorer = new RoleTableExplorer();
  roles = await Promise.all(
    currentUserRolesId.map(async (item) => {
      roleExplorer.id = item.role_id;
      const queryResult = await roleExplorer.getRoleValue();
      const value = queryResult.rows[0].value;
      return value;
    })
  );
  return roles;
}

module.exports = defineUserRoles;
