const express = require("express");
const http = require("http");
const cors = require("cors");
const session = require("express-session");

const config = require("../config/index");
const router = require("../server/routes/index");

const app = express();
const server = http.createServer(app);

const port = config.server_port;

app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true
  })
);
app.use(
  session({
    secret: config.session_secret,
    resave: false,
    saveUninitialized: true
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.set("port", port);

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
