const jwt = require("jsonwebtoken");
const router = require('express').Router();

//UPDATING
const verifyToken = (req, res, next) => {
    const auth_header = req.headers.token
    if (auth_header) {
        const token = auth_header.split(" ")[1] //1 is second element to be taken
        jwt.verify(token, process.env.JWT_SEC_KEY, (err, user) => {
            if (err) {
                res.status(401).json("Token is not valid or expired!");
            }
            req.user = user;
            next();
        })
    } else {
        //if user is not authenticated
        return res.status(401).json("You are not Authenticated");
    }
};

const verifyToken_andAuth = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id == req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("Sorry, You are not allowed..");
        }
    });
};

const verifyToken_andAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("Sorry, You are not allowed..");
        }
    });
};

//DELETING user 
router.delete("/:id", verifyToken_andAuth, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted..");
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET user 
router.get("/find/:id", verifyToken_andAdmin, async (req, res) => {
    try {
        const user = await user.findById(req.params.id)
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = { verifyToken, verifyToken_andAuth, verifyToken_andAdmin };