const mongoose = require("mongoose");
const config = require("../../config/index");

const connectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

const conn = mongoose.createConnection(
  config.mongodb_url + "/tape",
  connectionOptions
);

conn.on("open", () => {
  console.log("Connect to mongodb successfully.");
});

conn.on("err", err => {
  console.log("Connect error:" + err);
});

module.exports = conn;
