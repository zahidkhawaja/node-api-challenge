const express = require("express");
const Actions = require("../data/helpers/actionModel");
const router = express.Router();

// GET all actions
router.get("/", (req, res) => {
    Actions.get()
    .then(actions => res.status(200).json(actions))
    .catch(() => res.status(500).json({ message: "Error getting all actions."}));
});

// GET action by ID
router.get("/:id", (req, res) => {
    Actions.get(req.params.id)
    .then(action => res.json(action))
    .catch(() => res.status(500).json({ message: "Error: cannot get this action."}));
});

// PUT action by ID
router.put("/:id", (req, res) => {
    if(!req.body.notes || !req.body.description) {
        res.status(400).json({ error: "Error: notes and description required."})
    }
    Actions.update(req.params.id, req.body)
    .then(action => action ? res.status(200).json(action) : res.status(400).json({ message: "Error: cannot find this action."}))
    .catch(() => res.status(500).json({ message: "Error: unable to update action."}));
});

// POST a new action
router.post("/", (req, res) => {
    Actions.insert(req.body)
    .then(action => res.status(200).json(action))
    .catch(() => res.status(500).json({ message: "Error: cannot add new action."}));
});




module.exports = router;



