const express = require("express");
const path = require("path");
const app = express();

// // Static folder
// app.use(express.static(path.join(__dirname, "views")));


app.set("view engine", "ejs");
app.get("/", (req, res) => {
res.render("index", {data : { filters : ["Action", "Adventure", "Comedy"]}});
});

app.listen(1444, function(){
    console.log('Listening at Port 1444');
});
