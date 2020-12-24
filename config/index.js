let config = require("./config.default");

try {
  config = require("./config");
  console.log("got default config");
} catch {
  console.log("cannot get default config");
}

module.exports = config;
