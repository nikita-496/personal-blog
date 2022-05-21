const express = require("express");
const router = express.Router();
const forumController = require("../controller/forum.controller");

router
  .route("/")
  .post(forumController.handleForum)
  .get(forumController.handleForum)
  .put(forumController.handleForum);

router.route("/:id").delete(forumController.handleForum);

module.exports = router;
