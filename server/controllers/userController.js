const { user } = require("../database/models");

// console.log(user);

module.exports = {
  login: function(req, res) {
    user.find({ username: req.body.username }).exec((err, user) => {
      // console.log(err);
      console.log(user);
      if (!user.length) {
        res.status(403).send("Credentials don't match");
      } else {
        res.send(user);
      }
    });
  }
};
