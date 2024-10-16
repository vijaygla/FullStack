const express = require("express");
const connectDB = require("../src/db/conn");
const menRanking = require("../src/models/mens");

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Hello from the Rest API");
});

// we will handle the post req
app.post ()

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
