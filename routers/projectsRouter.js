const express = require("express");
const Projects = require("../data/helpers/projectModel");
const router = express.Router();

// GET all projects
router.get("/", (req, res) => {
    Projects.get()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json({ message: "Error getting all projects."}))});

module.exports = router;