const crypto = require("crypto");
const { User } = require("../database/models");

// console.log(user);

module.exports = {
  login: function(req, res) {
    User.findOne({
      username: req.body.username
    }).exec((err, user) => {
      // console.log(err);
      let hash = crypto.createHash("md5");
      hash.update(req.body.password);
      // console.log(user);
      if (!user) {
        res.status(403).send("Invalid username");
      } else if (hash.digest("hex") != user.password) {
        res.status(403).send("Credentials don't match");
      } else {
        req.session.isLogin = true;
        res.send({
          username: user.username
        });
      }
    });
  },
  logout: function(req, res) {
    req.session.isLogin = false;
    res.send("Logout successfully");
  },
  register: function(req, res) {
    let hash = crypto.createHash("md5");
    hash.update(req.body.password);
    User.create({
      username: req.body.username,
      password: hash.digest("hex")
    });
    res.send("Register successfully");
  },
  adminStatus: function(req, res) {
    User.find({}).exec((err, users) => {
      if (!users.length) {
        res.send({
          status: -1
        });
      } else if (!req.session.isLogin) {
        res.send({
          status: 0
        });
      } else {
        res.send({
          status: 1
        });
      }
    });
  }
};
