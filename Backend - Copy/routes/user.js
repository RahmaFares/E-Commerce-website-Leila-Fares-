const router = require("express").Router();
const { verifyToken, verifyToken_andAuth } = require("./verifyToken");

//put because we are UPDATING
router.put("/:id", verifyToken_andAuth, async (req, res) => {
    if (req.body.password) {
        //encrpting
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }
    try {
        const updatedUser = await User.findByAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router //exporting router