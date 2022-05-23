const express = require("express");
const ProfileTableExplorer = require("../utils/db_interection/ProfileTableExplorer");
const router = express.Router();

const profileExplorer = new ProfileTableExplorer();

router.route("/:id").delete(profileExplorer.deleteProfile);

module.exports = router;
