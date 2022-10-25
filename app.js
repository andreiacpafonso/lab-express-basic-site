const express = require("express");
const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
    // res.sendFile(__dirname+"/views/index.html");
    res.send(`<h1>Dave Grohl</h1>`);
});


app.get("/home", (req, res, next) => {
    res.sendFile(__dirname + "/public/views/home.html");
});

app.get("/about", (req, res, next) => {
    res.sendFile(__dirname + "/public/views/about.html");
});

app.get("/works", (req, res, next) => {
    res.sendFile(__dirname + "/public/views/works.html");
});

app.get("/gallery", (req, res, next) => {
    res.sendFile(__dirname + "/public/views/gallery.html");
});

app.listen(3000, () => console.log("App running on port 3000"));





app.listen(3000, () => {
    console.log("App is listening on port 3000");

});