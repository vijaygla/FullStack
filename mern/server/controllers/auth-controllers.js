const users = require("../models/user-model");
const bcrypt = require("bcrypt");


// home page
const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to the home page using controller");
    }
    catch(error) {
        console.log(error);
    }
}


// register page 
const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExit = await users.findOne({ email });
        if (userExit) {
            return res.status(400).json({ msg: "email already exist" });
        }

        // hash the password
        const saltRound = 10;
        const hashPassword = await bcrypt.hash(password, saltRound);

        const userCreated = await users.create({
            username,
            email,
            phone,
            password: hashPassword,
        });

        res.status(200).json({message: userCreated});
    }
    catch (error) {
        res.status(500).json({ msg: "internal server error" });
    }
}

module.exports = { home, register };

