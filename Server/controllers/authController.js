const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let refreshTokens = [];

const authController = {

    //Register
    registerUser: async(req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            //Create new user

            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
            });

            //Save to DB
            const user = await newUser.save();

            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    //Genarate AccessToken
    generateAccessToken: (user) => {
        return jwt.sign({
            username: user.username,
            admin: user.admin,
        },
        process.env.JWT_ACCESS_KEY,
        { expiresIn: "30s"}
        );
    },

    //Genarate RefreshToken
    generateRefreshToken: (user) => {
        return jwt.sign({
            username: user.username,
            admin: user.admin,
        },
        process.env.JWT_REFRESH_KEY,
        { expiresIn: "365d"}
        );
    },


    //Login
    loginUser: async(req, res) => {
        try {
            const user = await User.findOne({username: req.body.username});
            if(!user) {
                return res.status(404).json("Wrong username!");
            }

            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password,
            );

            if(!validPassword) {
                return res.status(400).json("Wrong password!")
            }

            if(user && validPassword) {
                const accessToken = authController.generateAccessToken(user);
                const refreshToken = authController.generateRefreshToken(user);
                refreshTokens.push(refreshToken);
                //Save refreshtoken in cookies
                res.cookie("refreshToken", refreshToken, {
                    httpOnly:true,
                    secure:false,
                    path:"/",
                    sameSite:"strict",
                })
                const {password, ...others} = user._doc;
                return res.status(200).json({...others, accessToken});
            }

        } catch (error) {
            return res.status(500).json(error);
        }
    },

    requestRefreshToken: async(req, res) => {
        const refreshToken = req.cookies.refreshToken;
        console.log(req.cookies);
        if(!refreshToken) return res.status(401).json("You're not authenticated1");
        if(!refreshToken.includes(refreshToken)) {
            return res.status(403).json("Refresh token is not valid");
        } 
        jwt.sign(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if(err) return console.log(err);
            refreshTokens.filter((token) => token !== refreshToken);
            //Create new AccessToken and RefreshToken
            const newAccessToken = authController.generateAccessToken(user);
            const newRefreshToken = authController.generateRefreshToken(user);
            refreshTokens.push(newRefreshToken);
            res.cookie("refreshToken", newRefreshToken, {
                httpOnly:true,
                secure:false,
                path:"/",
                sameSite:"strict",
            });
            return res.status(200).json({accessToken: newAccessToken});
        })
    },

    logOutUser: async(req, res) => {
        res.clearCookie("refreshToken");
        refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken);

        return res.status(200).json("Logged out!")
    },
}

module.exports = authController;