// userRoutes.js

const express = require("express");
const UserController = require("../controllers/userController");

const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);

module.exports = router;