const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const db = require("./src/config/db");
const initRoutes = require("./src/routes");

dotenv.config();
const app = express();

db();
app.use(cors({
    origin: "http://localhost:3000" ,
    credentials: true   
}));
app.use(cookieParser());
app.use(express.json());

initRoutes(app);

app.listen(5000, () => {
    console.log("Server is runing")
})