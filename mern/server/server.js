const express = require("express");
const app = express();
const router = require("./router/auth-router");

// middle ware--> use to take json data from server in proper manner use middle ware
app.use(express.json());


// // method 1
// app.get("/", (req, res) => {
//     res.send("Welcome to the home page");
// })

// app.get("/about", (req, res) => {
//     res.send("Welcome to the about page");
// })

// app.get("/register", (req, res) => {
//     res.send("Welcome to the register page");
// })

// app.get("/login", (req, res) => {
//     res.send("Welcome to the login page");
// })


// // method 2  convention for rest api
app.use("/api/auth", router);

const port = 5000;
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
})


// To check the output in browser
// http://localhost:5000/api/auth/register
