const crypto = require("crypto");
const { User } = require("../database/models");

function hash(data) {
  let hashObj = crypto.createHash("md5");
  hashObj.update(data);
  return hashObj.digest("hex");
}

module.exports = {
  login: function(req, res) {
    User.findOne({
      username: req.body.username
    }).exec((err, user) => {
      if (!user) {
        res.status(403).send("Invalid username");
      } else if (hash(req.body.password) != user.password) {
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
    User.create({
      username: req.body.username,
      password: hash(req.body.password)
    });
    res.send("Register successfully");
  },
  adminStatus: function(req, res) {
    User.find({}).exec((err, users) => {
      let status = 0;
      if (!users.length) {
        status = -1;
      } else if (!req.session.isLogin) {
        status = 0;
      } else {
        status = 1;
      }
      res.send({
        status
      });
    });
  }
};
