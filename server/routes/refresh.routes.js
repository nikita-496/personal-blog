const express = require("express");
const router = express.Router();
const refreshTokenController = require("../controller/refreshToken.controller");

router.post("/", refreshTokenController.handleRefreshToken);

module.exports = router;
