const { Question } = require("../database/models");

module.exports = {
  getPublicQuestions: function(req, res) {
    Question.find({
      public: {
        $gt: 0
      }
    }).exec((err, questions) => {
      res.send(questions);
    });
  },
  getPublicQuestionById: function(req, res) {
    Question.findOne({
      id: req.params.id,
      public: {
        $gt: 0
      }
    }).exec((err, question) => {
      if (!question) {
        res.status(401).send({
          msg: "Resource not found"
        });
      } else {
        res.send(question);
      }
    });
  },
  getAllQuestions: function(req, res) {
    if (!req.session.isLogin) {
      res.status(401).send("Unauthorized");
    } else {
      Question.find().exec((err, questions) => {
        res.send(questions);
      });
    }
  },
  getAllQuestionById: function(req, res) {
    if (!req.session.isLogin) {
      res.status(401).send("Unauthorized");
    } else {
      Question.findOne({
        id: req.params.id
      }).exec((err, question) => {
        if (!question) {
          res.status(401).send({
            msg: "Resource not found"
          });
        } else {
          res.send(question);
        }
      });
    }
  },
  question: function(req, res) {
    let id = 0;
    Question.find({}).exec((err, questions) => {
      if (!questions.length) {
        id = 1;
      } else {
        id = questions.length + 1;
      }
      Question.create({
        id,
        date: Date.now(),
        question: req.body.question,
        public: -1
      });
      res.send({
        id,
        question: req.body.question
      });
    });
  },
  answer: function(req, res) {
    if (!req.session.isLogin) {
      res.status(401).send({
        msg: "Unauthorized"
      });
    } else {
      Question.findOneAndUpdate(
        {
          id: req.params.id
        },
        {
          public: req.body.public,
          answer: req.body.answer,
          answer_date: Date.now()
        },
        {
          new: true
        }
      ).exec((err, answer) => {
        res.send(answer);
      });
    }
  }
};
