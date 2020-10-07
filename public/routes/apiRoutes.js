// Required
const express = require("express");
const router = express.Router();


//notes data structure


//GET route for notes data

router.get("/notes", function(req, res) {
    res.json(tableData)
});


//POST route to add notes
router.post("/notes", function(req, res) {

});

//DELETE rote to remove notes with the id delete

router.delete("/notes", function(req, res) {

});

module.exports = router;