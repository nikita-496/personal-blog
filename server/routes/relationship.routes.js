const express = require("express");
const router = express.Router();
const followingController = require("../controller/relationship.controller");
const RelationshipTableExplorer = require("../utils/db_interection/RelationshipExplorer");

const handler = new RelationshipTableExplorer();

router
  .route("/")
  .get(handler.getRelationship)
  .put(followingController.handleRelationship);

module.exports = router;
