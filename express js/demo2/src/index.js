const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = 5000;

// biltin middleware/

const staticPath = path.join(__dirname, "../public");


// to set the view engine 
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

// template engine routes by using the file name and render
app.get("", (req, res) => {
    res.render('index');
})

app.use(express.static(staticPath));
app.get("/", (req, res) => {
    res.send("Hello from the express server");
})

app.listen(port, () => {
    console.log(`Listing at port ${port}`);
})
