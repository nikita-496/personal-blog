const router = require("express").Router();
const PostController = require("../controller/post.controller");
const verifyRoles = require("../middleware/verifyRoles");
const RoleTableExplorer = require("../utils/db_interection/RoleTableExplorer");

let admin, editor, user;
getRoles().then((roles) => {
  [admin, editor, user] = roles;
  setRouter({ admin, editor, user });
});
async function getRoles() {
  const roleExplorer = new RoleTableExplorer();
  const queryResult = await roleExplorer.getAllRoleValue();
  let roles = [];
  queryResult.rows.forEach((role) => {
    roles.push(Object.values(role)[0]);
  });
  return roles;
}

function setRouter(roles) {
  router
    .route("/")
    .post(verifyRoles(roles.admin, roles.editor), PostController.createPost)
    .get(verifyRoles(roles.admin, roles.editor), PostController.getPosts)
    .put(verifyRoles(roles.admin, roles.editor), PostController.updatePost);

  router
    .route("/:id")
    .get(verifyRoles(roles.admin, roles.editor), PostController.getPosts)
    .delete(verifyRoles(roles.admin), PostController.deletePost);
}

module.exports = router;
