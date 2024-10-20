// where we define the schema(structre of data base) or blueprint

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
})


//  Secure the passwords  with the bcrypt
userSchema.pre("save", {

})

// define the model or the collection name

const users = new mongoose.model("users", userSchema);
module.exports = users;
