const User = require("../models/User");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/email");  // Assuming you've updated this utility to use SendGrid.
const bcrypt = require("bcryptjs"); // Adding bcrypt for password comparison

exports.register = async (req, res) => {
    console.log("Register endpoint hit");

    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    // Save the user in the database
    const newUser = new User({ name, email, password });
    await newUser.save();

    // Generate a token for email verification
    const verificationToken = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const verificationURL = `http://yourwebsite.com/verify-email?token=${verificationToken}`;

    await sendEmail(
        email,
        'Verify your email',
        `Click the link to verify your email: ${verificationURL}`,
        `<p>Click <a href="${verificationURL}">here</a> to verify your email</p>`
    );

    res.status(200).json({ message: 'Registration successful, please verify your email.' });
};

exports.login = async (req, res) => {
    const { email, password, isAdmin } = req.body;  // Changed username to email

    // Find the user
    const user = await User.findOne({ email });

    // If user not found or password is incorrect, send an error response
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check if the user is trying to login as admin
    if (isAdmin && !user.isAdmin) {
        return res.status(403).json({ message: "Access denied. Not an admin." });
    }

    // If everything's okay, sign a token and send it back
    const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET);
    res.status(200).json({ token });
};

exports.verifyEmail = async (req, res) => {
    const { token } = req.query;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(400).json({ message: 'Invalid token or user does not exist' });
        }

        user.isVerified = true;  // Assuming you have an isVerified field in your User model
        await user.save();

        res.status(200).json({ message: 'Email verified successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Invalid token or verification expired' });
    }
};

exports.forgotPassword = async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }

    const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const resetURL = `http://yourwebsite.com/reset-password?token=${resetToken}`;

    await sendEmail(
        email,
        'Reset your password',
        `Click the link to reset your password: ${resetURL}`,
        `<p>Click <a href="${resetURL}">here</a> to reset your password</p>`
    );

    res.status(200).json({ message: 'Reset instructions sent to your email.' });
};

exports.resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(400).json({ message: 'Invalid token or user does not exist' });
        }

        user.password = newPassword;
        await user.save();

        res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Invalid token or reset token expired' });
    }
};
