const jwt = require("jsonwebtoken");

const isAuth = {
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if(token) {
            const accessToken = token.split(" ")[1];

            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if(err) {
                   return res.status(403).json("Token không hợp lệ!");
                }
                req.user = user
                console.log(req.user.username);
                next();
            })
        } else {
            return res.status(401).json("Bạn chưa được xác thực!");
        }
    },
    verifyTokenAndAdminAuth: (req, res, next) => {
        isAuth.verifyToken(req, res, () => {
            // req.params.id || 
            if(req.user.roles === 1) {
                next();
            } else {
                return res.status(403).json("Bạn không có quyền Admin!");
            }
        })
    }
}

module.exports = isAuth;