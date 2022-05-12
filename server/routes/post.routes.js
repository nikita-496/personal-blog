const router = require("express").Router();
const PostController = require("../controller/post.controller");
const paginatedResults = require("../middleware/paginatedResults");
const verifyJWT = require("../middleware/verifyJWT");
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

async function setRouter(roles) {
  const posts = (await PostController.getPosts()).rows;
  router
    .route("/")
    .post(
      verifyJWT,
      verifyRoles(roles.admin, roles.editor),
      PostController.createPost
    )
    .get(paginatedResults(posts), (req, res) => {
      res.json(res.paginatedResults);
    })
    .put(
      verifyJWT,
      verifyRoles(roles.admin, roles.editor),
      PostController.updatePost
    );

  router
    .route("/:id")
    .get(PostController.getPost)
    .delete(verifyJWT, verifyRoles(roles.admin), PostController.deletePost);
}

module.exports = router;
