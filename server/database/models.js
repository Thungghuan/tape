const mongoose = require("mongoose");
const conn = require("./index");

const userSchema = mongoose.Schema({
  username: String,
  password: String
});

const questionSchema = mongoose.Schema({
  id: Number,
  date: Date,
  question: String,
  public: Number,
  answer: String,
  answer_data: Date
});

const User = conn.model("User", userSchema);
const Question = conn.model("Question", questionSchema);

module.exports = {
  User,
  Question
};
