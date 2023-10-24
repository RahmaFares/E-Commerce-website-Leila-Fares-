const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");  // Consider renaming your route
const authRoute = require("./routes/auth");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();


if (!process.env.MONGO_URL || !process.env.STRIPE_SECRET_KEY) {
    console.error("Missing essential environment variables. Check your .env file.");
    process.exit(1);
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection successful"))
    .catch((err) => {
        console.error("Error connecting to the database:", err);
        process.exit(1);
    });

const allowedOrigins = [
    "http://localhost:3000"
];

app.use(cors({
    credentials: true,
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


app.use('/api', userRoutes);
app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});
