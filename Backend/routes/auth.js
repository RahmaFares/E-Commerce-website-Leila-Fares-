const express = require("express");
const router = express.Router();
const {
    register,
    login,
    verifyEmail,
    forgotPassword,
    resetPassword,
    verifyAdmin
} = require("../controllers/authController");

// Registration route
router.post("/register", register);

// Login route
router.post("/login", login);

// Email verification route
router.get("/verify-email", verifyEmail);

// Forgot password route
router.post("/forgot-password", forgotPassword);

// Reset password route
router.post("/reset-password", resetPassword);

// Verify if user is admin route
router.post("/admin-endpoint", verifyAdmin);

module.exports = router;
