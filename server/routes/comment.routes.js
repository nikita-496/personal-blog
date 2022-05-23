const express = require("express");
const router = express.Router();
const commentController = require("../controller/comment.controller");
const filterByBody = require("../middleware/filterByBody");
  
  router.route("/")
    .post(commentController.handleComment)
    .get(filterByBody(), (req, res) => {
      res.json(res.filterByBody)
    })
    .put(commentController.handleComment);
  
  router.route("/:id")
    .get(commentController.handleComment)
    .delete(commentController.handleComment);   


module.exports = router;
