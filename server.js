//build server structure
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))


const htmlRoutes = require('./routes/htmlRoutes.js');
app.use(htmlRoutes);

const apiRoutes = require('./routes/apiRoutes.js');
app.use("/api", apiRoutes);



app.listen(PORT, function() {
    console.log("listening on port " + PORT)
});