const router = require("express").Router();
const {
    register,
    login,
    verifyEmail,
    forgotPassword,
    resetPassword,
    verifyAdmin // Use the exported verifyAdmin function from authController
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.get("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/admin-endpoint", verifyAdmin);

module.exports = router;
