const express = require("express");
const getAllUsers = require("../controllers/admin-controllers");
const authMiddleware = require("../middelware/auth-Middelware");
const adminMiddelware = require("../middelware/admin-middelware");
const router = express.Router();



router.route("/users").get(authMiddleware,adminMiddelware,getAllUsers);

module.exports = router;