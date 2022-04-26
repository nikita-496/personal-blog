const router = require("express").Router();
const userController = require("../controller/user.controller");
const UserController = require("../controller/user.controller");

router.post("/user", UserController.createUser);
router.get("/user", UserController.getUsers);
router.get("/user/:id", UserController.getUser);
router.put("/user", UserController.updateUser);
router.delete("/user", UserController.deleteUser);

module.exports = router;
