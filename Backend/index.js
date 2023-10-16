const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const cors = require("cors");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB connection successful"))
    .catch((err) => {
        console.log(err);
    });

app.use(cors(
    {
        credentials: true,
        origin: "http://localhost:3000"
    }
));
app.use(express.json());
app.use("api/auth", authRoute);
app.use("api/users", userRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port 5000!");
});

