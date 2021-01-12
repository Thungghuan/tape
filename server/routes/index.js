const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const questionController = require("../controllers/questionController");

router.post("/login", userController.login);
router.post("/register", userController.register);
router.post("/logout", userController.logout);
router.get("/adminStatus", userController.adminStatus);

router.get("/question", questionController.getPublicQuestions);
router.get("/question/:id", questionController.getPublicQuestionById);
router.get("/all", questionController.getAllQuestions);
router.get("/all/:id", questionController.getAllQuestionById);
router.post("/question", questionController.question);
router.post("/answer/:id", questionController.answer);

module.exports = router;
