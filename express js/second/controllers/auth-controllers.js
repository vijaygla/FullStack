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

        const userCreated = await users.create({
            username,
            email,
            phone,
            password,
        });

        res.status(201).json({
            message: userCreated,
            msg: "Registration successfull",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    }
    catch (error) {
        res.status(500).json({ msg: "internal server error" });
    }
}




// Login page
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExit = await users.findOne({ email });
        console.log(userExit);

        if (!userExit) {
            return res.status(400).json({ message: "Invalid Credential" });
        }

        // const user = await bcrypt.compare(password, userExit.password);
        const user = await userExit.comparePassword(password);


        if (user) {
            res.status(200).json({
                msg: "Login Successful",
                token: await userExit.generateToken(),
                userId: userExit._id.toString(),
            });
        }
        else {
            res.status(401).json({ message: "Invalid email or password" })
        }
    }
    catch (error) {
        res.status(500).json("Internal Server Error");
    }
}


module.exports = { home, register, login};
