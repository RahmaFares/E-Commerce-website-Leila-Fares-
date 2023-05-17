const mongoose = require("mongoose");

//creating user schema 
const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true }, //type, and required and unique
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, unique: true },
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }

);

module.exports = mongoose.model("User", UserSchema);