// Hosting of any statics website using the express js server
// if we hava a static app we can make in public app and can be host using 1 line of code i.e: app.use(express.static(staticPath));


const express = require("express");
const path = require("path");
const app = express();

// always give relative path iin express js
const staticPath = path.join(__dirname, "../public");
console.log(staticPath);

// builtin middle ware
app.use(express.static(staticPath));


app.get("/", (req, res) => {
    res.send("<h1>Welcome to home page</h1>");
})

// To pass many line of html
app.get("/home", (req, res) => {
    res.write("<h1>Welcome to line 1 </h1>");
    res.write("<h1>Welcome to line 2</h1>");
    res.send();
})

app.get("/about", (req, res) => {
    // res.status(200).send("Welcome to the about page");
    res.send("Welcome to the about page");
})

app.get("/contact", (req, res) => {
    res.send("Welcome to the contact page");
})

// To send the json file in server
app.get("/tempjson", (req, res) => {
    res.json([
        {
            id: 1,
            name: "vija",
        },
        {
            id: 1,
            name: "vija",
        },
    ])
})
app.get("/temp", (req, res) => {
    res.send([

        {
            id: 1,
            name: "vijay",
        },
        {
            id: 1,
            name: "vijay",
        },
    ])
})
// Note: This method are identical when an object or an array is passed but res.json() will also convert non-object,such as null and undefined, which are not valid json

// Listening the port on given port
app.listen(3000, () => {
    console.log("listening at port 3000");
})
