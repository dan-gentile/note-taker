// Required
const express = require("express");
const fs = require("fs");
const router = express.Router();


// reads files from the data base
function readData() {
    fs.readFile("db/db.json", "utf8", function(err, data) {
        if (err) throw err;

        if (data) {
            // data received as a variable
            const noteData = JSON.parse(data)

            // display data on api/notes page
            router.get("/notes", function(req, res) {
                res.json(noteData);
            });
        } else {
            router.get("/notes", function(req, res) {
                res.send("no current data");
            });
        }

    });
};


// POST route to add notes


router.post("/notes", function(req, res) {
    let inputData = JSON.stringify(req.body, null, 2);
    let inputDataParse = JSON.parse(inputData)


    fs.readFile("db/db.json", "utf8", function(err, data) {
        if (err) throw err;

        let noteData = JSON.parse(data);
        noteData.push(inputDataParse)

        fs.writeFile("db/db.json", JSON.stringify(noteData, null, 2), function(err) {
            if (err) throw err;
        });

    });


    res.send("HELLO!")

});

//DELETE rote to remove notes with the id delete

router.delete("/notes", function(req, res) {

});

readData()

module.exports = router;