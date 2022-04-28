const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");

router.post("/auth", authController.handleLogin);

module.exports = router;
