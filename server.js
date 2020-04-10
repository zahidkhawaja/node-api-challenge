const express = require("express");
const projectsRouter = require("./routers/projectsRouter");

const server = express();

server.use(express.json());
server.use("/api/projects", projectsRouter);

server.get("/", (req, res) => res.send("Testing 123"));

module.exports = server;