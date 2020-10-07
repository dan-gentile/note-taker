// Required
const path = require("path");
const express = require("express");
const router = express.Router();

//GET route to Homepage
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

//GET route to Notes page
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

module.exports = router;