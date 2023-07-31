const bcrypt = require("bcrypt");
const dbUser = require("../models");
const { validationResult } = require("express-validator");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const db = require("../models");
const crypto = require('crypto');
const sendMail = require("../utils/sendMail");
dotenv.config();

const authController = {

     //Genarate AccessToken
     generateAccessToken: (user) => {
        return jwt.sign({
            username: user.id,
            roles: user.roles,
        },
        process.env.JWT_ACCESS_KEY,
        { expiresIn: "2h"}
        );
    },

    //Genarate RefreshToken
    generateRefreshToken: (user) => {
        return jwt.sign({
            username: user.id,
            roles: user.roles,
        },
        process.env.JWT_REFRESH_KEY,
        { expiresIn: "365d"}
        );
    },

    //Register
    registerUser: async(req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400)
            .json({ 
              status: "fail", 
              field: errors.array()[0].param,
              msg: errors.array()[0].msg, 
            });
        }
        try {
            const {
                email,
                username, 
                password, 
                confirmPassword,
                firstname,
                lastname,
                image,
                sex,
                roles,
                phone,
                birth,
                address,
                } = req.body;
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(password, salt);

            if(!email || !username || !password) {
                return res.status(400).json('Missing payloads')
            }

            const existEmail = await dbUser.User.findOne({where: {email}});
            if(existEmail) {
                return res.status(400).json({
                    status: "fail",
                    field: "email",
                    msg: "Địa chỉ email này đã được dùng để đăng ký tài khoản khác",
                });
            }
            const existUsername = await dbUser.User.findOne({where: {username}});
            if (existUsername) {
                return res.status(400).json({
                  status: "fail",
                  field: "username",
                  msg: "Tên đăng nhập đã tồn tại, vui lòng chọn một tên khác",
                });
            }

            if (password !== confirmPassword) {
                return res.status(400).json({
                  status: "fail",
                  field: "confirmPassword",
                  msg: "Mật khẩu nhập lại chưa chính xác",
                });
              }

            const newUser = {
                email, 
                username, 
                password: hashed,
                firstname,
                lastname,
                image,
                sex,
                roles,
                phone,
                birth,
                address,
            }

            await dbUser.User.create(newUser);

            return res.status(200).json({status: "Register successfully", data: newUser});
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    //Login
    loginUser: async(req, res) => {
        try {
            const user = await dbUser.User.findOne({where: {username: req.body.username}});
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
                const generateAccessToken = authController.generateAccessToken(user);
                const generateRefreshToken = authController.generateRefreshToken(user);
                // refreshTokens.push(refreshToken);
                await db.User.update({refreshToken: generateRefreshToken},{
                    where: {id: user.id}
                });
                //Save refreshtoken in cookies
                res.cookie("refreshToken", generateRefreshToken, {
                    httpOnly:true,
                    secure:false,
                    path:"/",
                    sameSite:"strict",
                })
                const { passwordResetExpires, passwordResetToken, password, refreshToken, createdAt, updatedAt, deletedAt, ...others } = user.dataValues;

                return res.status(200).json({others, generateAccessToken});
            }

        } catch (error) {
            return res.status(500).json(error);
        }
    },

    requestRefreshToken: async(req, res) => {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.status(401).json("You're not authenticated");
        if(!refreshToken.includes(refreshToken)) {
            return res.status(403).json("Refresh token is not valid");
        } 
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, async(err, user) => {
            if(err) return console.log("err :" + err);
            // return res.status(403).json(user.username);
            //Check refreshToken in db
            const checkRefreshToken = await db.User.findOne({
                where: {id: user.id,
                refreshToken: refreshToken,}
            });

            if(checkRefreshToken) {
                //Create new AccessToken and RefreshToken
                const newAccessToken = authController.generateAccessToken(user);
                const newRefreshToken = authController.generateRefreshToken(user);
                // refreshTokens.push(newRefreshToken);
                await db.User.update({refreshToken: newRefreshToken},{
                    where: {id: user.id}
                });
                res.cookie("refreshToken", newRefreshToken, {
                    httpOnly:true,
                    secure:false,
                    path:"/",
                    sameSite:"strict",
                });
                return res.status(200).json({mes: "Token hợp lệ.", newAccessToken: newAccessToken});
            } else {
                return res.status(500).json({mes: "Token không hợp lệ!"});
            }
        })
    },

    logOutUser: async(req, res) => {
        res.clearCookie("refreshToken");
        // refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken);

        return res.status(200).json("Logged out!")
    },

    forgotPassword: async(req, res) => {
        const { email } = req.query;
        if(!email) throw new Error('Chưa có Mail!');
        const user = await db.User.findOne({where: { email }});
        if(!user) throw new Error('Mail này chưa được đăng ký!');
        const resetToken = user.createPasswordChangedToken();
        console.log("resetToken : " + resetToken);
        await user.save();

        const html = `Vui lòng click vào link dưới đây để thay đổi mật khẩu. Link này sẽ hết hạn sau 10 phút kể từ bây giờ. 
        <a href=${process.env.URL_SERVER}/api/v1/auth/reset-password/${resetToken}>Nhấn vào đây</a>`

        const data = {
            email,
            html,
        }

        const rs = await sendMail(data);

        return res.status(200).json({
            success: true,
            rs: rs,
        })
    },

    resetPassword: async(req, res) => {
        const { token, password } = req.body;
        if(!token && !password) throw new Error('Chưa gửi!');
        const passwordResetToken = crypto.createHash('sha256').update(token).digest('hex');
        const user = await db.User.findOne({
            where: {
                passwordResetToken,
                // passwordResetExpires: { 
                //     $gt: Date.now()
                // }
            }
        });
        if(!user) throw new Error('Không tìm thấy!');

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);

        user.password = hashed;
        user.passwordResetToken = undefined;
        user.passwordChangedAt = (Date(Date.now())).toString();
        user.passwordResetExpires = undefined;

        user.save();
        return res.status(200).json({
            success: user ? true : false,
            mes: user ? 'Đổi mật khẩu thành công.' : 'Đổi mật khẩu thất bại!'
        });
    }
}

module.exports = authController;