const authRoute = require("../routes/authRoute");
const productRoute = require("../routes/productRoute");
const userRoute = require("../routes/userRoute");
const categoryRoute = require("../routes/categoryRoute")

const initRoutes = (app) => {
    app.use("/api/v1/auth", authRoute);
    app.use("/api/v1/product", productRoute);
    app.use("/api/v1/category", categoryRoute);
    app.use("/api/v1/users", userRoute);


    return app.use('/', (req, res) => {
        return res.send('SERVER ONN');
    })
}

module.exports = initRoutes;