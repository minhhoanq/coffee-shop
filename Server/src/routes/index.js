const authRoute = require("../routes/authRoute");
const productRoute = require("../routes/productRoute");

const initRoutes = (app) => {
    app.use("/api/v1/auth", authRoute);
    app.use("/api/v1/product", productRoute);


    return app.use('/', (req, res) => {
        return res.send('SERVER ONN');
    })
}

module.exports = initRoutes;