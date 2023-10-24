const router = require("express").Router();
const { register, login, verifyEmail, forgotPassword, resetPassword } = require("../controllers/authController");
const { verifyAdmin } = require('../middleware/auth');

router.post("/register", register);
router.post("/login", login);
router.get("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/admin-endpoint", verifyAdmin, controllerFunction);



module.exports = router;
