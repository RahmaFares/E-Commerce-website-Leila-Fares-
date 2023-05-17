const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER FUNCTION 
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password, process.env.PASS_SEC).toString(),
        //we need to encrypt the password, I will use CryptoJS
    });
    try {
        //Save Method to save it to db 
        const savedUser = await newUser.save(); //if we have saved users,we used async and await 
        res.status(201).json(savedUser);  //201: saved successfully
    } catch (err) {
        res.status(500).json(err); //500: for errors
    }

});

//LOGIN FUNCTION 

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Wrong Credentials!");

        //decrptying password from CryptoJS
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const Original_password = hashedPassword.toString(CryptoJS.enc.Utf8);

        Original_password !== req.body.password &&
            res.status(401).json("Wrong Credentials!");

        //creating json webtoken 
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,

        }, process.env.JWT_SEC_KEY,
            { expiresIn: "3d" }
        );

        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }

})

module.exports = router //exporting router