import express from "express";

const app = express();

const port = 9000;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/about", (req, res) => {
    res.send("This is my about page");
})


app.listen(port, () => {
    console.log(`Server is listen at port ${port}`);
})

