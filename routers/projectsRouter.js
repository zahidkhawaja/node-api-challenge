const express = require("express");
const Projects = require("../data/helpers/projectModel");
const router = express.Router();

// GET all projects
router.get("/", (req, res) => {
    Projects.get()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json({ message: "Error getting all projects."}))});

// PUT project by ID
router.put("/:id", (req, res) => {
    if(!req.body.name || !req.body.description) {
        res.status(400).json({ error: "Error: project name or description missing!"})
    };
    Projects.update(req.params.id, req.body)
    .then(project => project ? res.status(200).json(project) : res.status(404).json({ error: "Error: cannot find this project."}))
    .catch(() => res.status(500).json({ error: "Error: unable to edit this project."}));
});

module.exports = router;