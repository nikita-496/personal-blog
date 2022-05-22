const express = require("express");
const router = express.Router();
const commentController = require("../controller/comment.controller");

router.route("/")
  .post(commentController.handleComment)
  .get(commentController.handleComment)
  .put(commentController.handleComment);

router.route("/:id")
  .delete(commentController.handleComment); 

module.exports = router;
