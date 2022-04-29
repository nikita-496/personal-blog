const router = require("express").Router();
const UserController = require("../controller/user.controller");

router
  .route("/")
  .post(UserController.createUser)
  .get(UserController.getUsers)
  .put(UserController.updateUser);

router
  .route("/:id")
  .get(UserController.getUser)
  .delete(UserController.deleteUser);

module.exports = router;
