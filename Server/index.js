const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log('Connected Successfully'))
        .catch((err) => { console.error(err); });;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//ROUTES
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/v1/product", productRoute);

app.listen(5000, () => {
    console.log("Server is runing")
})