import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
// ✅ Middleware - applied BEFORE routes


// ✅ Routes
app.get("/", (req, res) => {
    res.send("This is home page Hello World");
});

app.get("/about", (req, res) => {
    res.send("This is my about page");
});

// ✅ Start server
app.listen(PORT, () => {
    connectDb();
    console.log(`Server is listening at port ${PORT}`);
});

