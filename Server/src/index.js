const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const db = require("./dbs/db");
const initRoutes = require("./routes");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");

dotenv.config();
const app = express();

// init middleware
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

// init db
db();
app.use(cors({
    origin: "http://localhost:3000" ,
    credentials: true   
}));
app.use(cookieParser());
app.use(express.json());

//init router
initRoutes(app);
// init error

module.exports = app