let config = require("./config.default");

try {
  config = require("./config");
  console.log("Using your own configuration file in config.js");
} catch {
  console.log("No configuration file found, using default file");
}

module.exports = config;
