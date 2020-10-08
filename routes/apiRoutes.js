// Required
const express = require("express");
const fs = require("fs");
const router = express.Router();


// display data on api/notes page
router.get("/notes", function(req, res) {
    // reads files from the database
    const data = JSON.parse(fs.readFileSync("data/db.json", { encoding: 'utf8', flag: 'r' }));

    // return
    return res.json(data);
});


// POST route to add notes
router.post("/notes", function(req, res) {
    // reads input data from page
    const inputData = JSON.stringify(req.body, null, 2);

    // parses the data 
    const inputDataParse = JSON.parse(inputData);

    // reads files from the database 
    const fileData = JSON.parse(fs.readFileSync("data/db.json", { encoding: 'utf8', flag: 'r' }));

    // pushes the input data to the database data
    fileData.push(inputDataParse);

    // adds a unique ID to each entry in the database and writes to the database
    fileData.forEach((element, i) => {
        element.id = i + 1;
        fs.writeFileSync("data/db.json", JSON.stringify(fileData, null, 2));
    });

    // return
    return res.send("success");
});


//DELETE rote to remove notes with the id delete
router.delete("/notes/:id", function(req, res) {
    // gets data from clicking the trash
    const removeData = parseInt(req.params.id);

    // read file from database
    const deleteFileData = JSON.parse(fs.readFileSync("data/db.json", { encoding: 'utf8', flag: 'r' }));

    // loops through the array
    for (let i = 0; i < deleteFileData.length; i++) {
        // if the id is equal to removeData remove delete item from array
        if (deleteFileData[i].id === removeData) {
            deleteFileData.splice(i, 1);
        };
    };

    // rewrite the database with updated info
    fs.writeFileSync("data/db.json", JSON.stringify(deleteFileData, null, 2));

    // return
    return res.send("delete");
});



module.exports = router;