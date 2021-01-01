const express = require("express");
const http = require("http");
// const path = require("path");
// const bodyParser = require("body-parser");
const config = require("../config/index");
const router = require("../server/routes/index");

const app = express();
const server = http.createServer(app);

const port = config.server_port;

// const questionsRouter = require('./routes/questions');
// const loginRouter = require('./routes/login');
// const allQuestionsRouter = require('./routes/allQuestions');
// const answerRouter = require('./routes/answer');

app.use(express.json());
app.use("/", router);
// app.get('/', (req, res) => {
//   res.send("Test successfully")
// })

// app.use('/questions', questionsRouter);
// app.use('/login', loginRouter);
// app.use('/allQuestions', allQuestionsRouter);
// app.use('/answer', answerRouter);

app.set("port", port);

server.listen(port);
