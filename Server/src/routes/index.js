const authRoute = require("../routes/authRoute");
const productRoute = require("../routes/productRoute");
const userRoute = require("../routes/userRoute");
const categoryRoute = require("../routes/categoryRoute");
const cartRoute = require("../routes/cartRouter");
const ingredientRoute = require("../routes/ingredientRoute");
const orderRouter = require("../routes/orderRouter");

const initRoutes = (app) => {
    app.use("/api/v1/auth", authRoute);
    app.use("/api/v1/product", productRoute);
    app.use("/api/v1/category", categoryRoute);
    app.use("/api/v1/users", userRoute);
    app.use("/api/v1/cart-item", cartRoute);
    app.use("/api/v1/ingredient", ingredientRoute);
    app.use("/api/v1/order", orderRouter);


    return app.use('/', (req, res) => {
        return res.status(500).send('SERVER ONN');
    })
}

module.exports = initRoutes;