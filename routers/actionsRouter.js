const express = require("express");
const Actions = require("../data/helpers/actionModel");
const router = express.Router();

// GET all actions
router.get("/", (req, res) => {
    Actions.get()
    .then(actions => res.status(200).json(actions))
    .catch(() => res.status(500).json({ message: "Error getting all actions."}));
});

module.exports = router;



