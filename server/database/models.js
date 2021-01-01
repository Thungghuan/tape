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

const user = conn.model("user", userSchema);
const question = conn.model("question", questionSchema);

module.exports = {
  user,
  question
};
