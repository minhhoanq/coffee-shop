const authRoute = require("../routes/authRoute");

const initRoutes = (app) => {
    app.use("/api/v1/auth", authRoute);

    return app.use('/', (req, res) => {
        return res.send('SERVER ONN');
    })
}

module.exports = initRoutes;