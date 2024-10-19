const express = require("express");
const router = express.Router();
// m1
// const {home, register} = require("../controllers/auth-controllers");
// m2
const authController = require("../controllers/auth-controllers");



// method 1
// router.get("/", (req, res) => {
//     res.send("Welcome to home page using router");
// })

// router.get("/about", (req, res) => {
//     res.status(200).send("Welcome to about page using router");
// })

// router.get("/register", (req, res) => {
//     res.send("Welcome to resgister page using router");
// })


// method 2
router.route("/").get(authController.home);
router.route('/register').post(authController.register);

module.exports = router;
