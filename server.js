const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => res.send("Testing 123"));

module.exports = server;