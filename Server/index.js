const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const db = require("./config/db");

dotenv.config();
const app = express();

// mongoose.connect(process.env.MONGODB_URL)
//         .then(() => console.log('Connected Successfully'))
//         .catch((err) => { console.error(err); });;

// app.get("/login", (req, res) => {
//     const sql = "SELECT * FROM account";
//     db.query(sql, (err, data)=>{
//         if(err) return res.status(500).json(err);
//         return res.status(200).json(data)
//     })
// })

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// //ROUTES
app.use("/account", authRoute);
// app.use("/v1/user", userRoute);
app.use("/user", productRoute);

app.listen(5000, () => {
    console.log("Server is runing")
})