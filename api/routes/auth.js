const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER FUNCTION 
router.post("/register", async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: CryptoJS.SHA256(req.body.password).toString(),
            email: req.body.email
        });
        res.json(newUser)
    } catch (err) {
        res.status(500).json(err);
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