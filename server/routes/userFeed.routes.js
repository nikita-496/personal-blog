const router = require("express").Router();
const userFeedController = require("../controller/userFeed.controller")


router
  .route("/")
  .put(userFeedController.handleUserFeed);


module.exports = router;
