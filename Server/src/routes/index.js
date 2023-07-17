const authRoute = require("../routes/authRoute");
const productRoute = require("../routes/productRoute");
const userRoute = require("../routes/userRoute");

const initRoutes = (app) => {
    app.use("/api/v1/auth", authRoute);
    app.use("/api/v1/product", productRoute);
    app.use("/api/v1/user", userRoute);


    return app.use('/', (req, res) => {
        return res.send('SERVER ONN');
    })
}

module.exports = initRoutes;