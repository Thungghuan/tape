const { user } = require("../database/models");

// console.log(user);

module.exports = {
	login: function (req, res) {
		user.find({ username: req.body.username }).exec((err, user) => {
			// console.log(err);
			console.log(user);
			if (!user.length) {
				res.status(403).send("Credentials don't match");
			} else {
				req.session.isLogin = true;
				res.send(user);
			}
		});
	},
	logout: function (req, res) {
		req.session.isLogin = false;
		res.send("Log out");
	},
	register: function (req, res) {
		user
			.create({
				username: req.body.username,
				password: req.body.password
			})
		res.send("Register successfully");
	}
};
