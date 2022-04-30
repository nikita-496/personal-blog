const express = require("express");
const userProfileController = require("../controller/userProfile.controller");
const router = express.Router();

router.route("/").post(userProfileController.handleUserProfile);

module.exports = router;
