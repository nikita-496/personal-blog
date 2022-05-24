const router = require("express").Router();
const userFeedController = require("../controller/userFeed.controller");

router.route("/").put(userFeedController.handleUserFeed);

router
  .route("/:id")
  .get(userFeedController.handleUserFeed)
  .delete(userFeedController.handleUserFeed);

module.exports = router;
