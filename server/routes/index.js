const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/login", userController.login);
router.post("/register", userController.register);
router.post("/logout", userController.logout);
router.get("/adminStatus", userController.adminStatus);

module.exports = router;
