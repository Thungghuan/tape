const mongoose = require("mongoose");
const conn = require("./index");

const userSchema = mongoose.Schema({
  username: String,
  password: String
});

const questionsSchema = mongoose.Schema({
  id: Number,
  date: Date,
  question: String
});

const answerSchema = mongoose.Schema({
  questionId: Number,
  date: Date,
  answer: String
});

const user = conn.model("user", userSchema);
const question = conn.model("question", questionsSchema);
const answer = conn.model("answer", answerSchema);

module.exports = {
  user,
  question,
  answer
};
