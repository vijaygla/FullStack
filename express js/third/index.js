import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// middlewares
app.use(express.json());


// routes
app.get("/", (req, res) => {
    res.status(201).send("This is home page.");
})

app.listen(PORT, ()=> {
    connectDb();
    console.log(`Server is listing at port ${PORT}`);
})

