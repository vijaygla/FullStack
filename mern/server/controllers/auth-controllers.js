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
        res.status(200).json({message: req.body});
    }
    catch (error) {
        res.status(500).json({ msg: "internal server error" });
    }
}

module.exports = { home, register };
