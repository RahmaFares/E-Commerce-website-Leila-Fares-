const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config();

const { MONGO_URL, STRIPE_SECRET_KEY, PORT = 5000 } = process.env;

if (!MONGO_URL || !STRIPE_SECRET_KEY) {
    console.error("Missing essential environment variables. Check your .env file.");
    process.exit(1);
}

const stripe = require('stripe')(STRIPE_SECRET_KEY);

mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection successful"))
    .catch((err) => {
        console.error("Error connecting to the database:", err);
        process.exit(1);
    });

const app = express();

const whitelist = ['http://localhost:3000']; // list of allowed origins
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

app.use(cors(corsOptions));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/api/users', userRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});
