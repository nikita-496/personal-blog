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

/*router.post("/user", UserController.createUser);
router.get("/user", UserController.getUsers);
router.get("/user/:id", UserController.getUser);
router.put("/user", UserController.updateUser);
router.delete("/user/:id", UserController.deleteUser);*/

module.exports = router;
