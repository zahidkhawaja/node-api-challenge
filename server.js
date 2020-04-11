const express = require("express");
const projectsRouter = require("./routers/projectsRouter");
const actionsRouter = require("./routers/actionsRouter");

const server = express();

server.use(express.json());
server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

server.get("/", (req, res) => res.send("Testing 123"));

module.exports = server;