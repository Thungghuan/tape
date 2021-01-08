const express = require("express");
const http = require("http");
const config = require("../config/index");
const router = require("../server/routes/index");

const app = express();
const server = http.createServer(app);

const port = config.server_port;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.set("port", port);

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
