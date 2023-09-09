const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const db = require("../models");
const crypto = require('crypto');
const sendMail = require("../utils/sendMail");
const makeToken = require("uniqid");
const { Op } = require("sequelize");
dotenv.config();

const authController = {

     //Genarate AccessToken
     generateAccessToken: (user) => {
        return jwt.sign({
            id: user.id,
            roles: user.roles,
        },
        process.env.JWT_ACCESS_KEY,
        { expiresIn: "24h"}
        );
    },

    //Genarate RefreshToken
    generateRefreshToken: (user) => {
        return jwt.sign({
            id: user.id,
            roles: user.roles,
        },
        process.env.JWT_REFRESH_KEY,
        { expiresIn: "365d"}
        );
    },

    //Register
    // registerUser: async(req, res) => {
    //     const errors = validationResult(req);
    //     if(!errors.isEmpty()) {
    //         return res.status(400)
    //         .json({ 
    //           status: "fail", 
    //           field: errors.array()[0].param,
    //           msg: errors.array()[0].msg, 
    //         });
    //     }
    //     try {
    //         const {
    //             email,
    //             username, 
    //             password, 
    //             confirmPassword,
    //             firstname,
    //             lastname,
    //             image,
    //             sex,
    //             roles,
    //             phone,
    //             birth,
    //             address,
    //             } = req.body;
    //         const salt = await bcrypt.genSalt(10);
    //         const hashed = await bcrypt.hash(password, salt);

    //         if(!email || !username || !password) {
    //             return res.status(400).json('Missing payloads')
    //         }

    //         const existEmail = await dbUser.User.findOne({where: {email}});
    //         if(existEmail) {
    //             return res.status(400).json({
    //                 status: "fail",
    //                 field: "email",
    //                 msg: "Địa chỉ email này đã được dùng để đăng ký tài khoản khác",
    //             });
    //         }
    //         const existUsername = await dbUser.User.findOne({where: {username}});
    //         if (existUsername) {
    //             return res.status(400).json({
    //               status: "fail",
    //               field: "username",
    //               msg: "Tên đăng nhập đã tồn tại, vui lòng chọn một tên khác",
    //             });
    //         }

    //         if (password !== confirmPassword) {
    //             return res.status(400).json({
    //               status: "fail",
    //               field: "confirmPassword",
    //               msg: "Mật khẩu nhập lại chưa chính xác",
    //             });
    //           }

    //         const newUser = {
    //             email, 
    //             username, 
    //             password: hashed,
    //             firstname,
    //             lastname,
    //             image,
    //             sex,
    //             roles,
    //             phone,
    //             birth,
    //             address,
    //         }

    //         await dbUser.User.create(newUser);

    //         return res.status(200).json({status: "Register successfully", data: newUser});
    //     } catch (error) {
    //         return res.status(500).json(error);
    //     }
    // },

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

            const existEmail = await db.User.findOne({where: {email}});
            if(existEmail) {
                return res.status(400).json({
                    status: "fail",
                    field: "email",
                    msg: "Địa chỉ email này đã được dùng để đăng ký tài khoản khác",
                });
            }
            const existUsername = await db.User.findOne({where: {username}});
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

            // await dbUser.User.create(newUser);
            const accessToken = makeToken();
            const emailEdited = btoa(email) + '@' + accessToken;

            const tempUser = await db.User.create({
                email: emailEdited,
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
            })

            // res.cookie('dataregister',, {httpOnly: true, maxAge: 30 * 1000});
            // res.cookie("dataregister", {...newUser, accessToken}, {
            //     expires: new Date(Date.now() + 15 * 60 * 1000),
            //     httpOnly:true,
            //     secure:false,
            //     path:"/",
            //     sameSite:"strict",
            // })

            if(tempUser) {
                const html = `<h2>Code Đăng ký tài khoản:</h2> <br/><blockquote>${accessToken}</blockquote>`
                const data = {
                    email,
                    html,
                    subject: 'Register with email!'
                }
        
                await sendMail(data);
            }

            setTimeout(async()=>{
                await db.User.destroy({
                        where: {
                            email: emailEdited
                        },
                        force: true
                    }
                );
            },[15 * 60 * 1000])            

            return res.status(200).json({status: "Register successfully", newUser: newUser});
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    finalRegister: async(req, res) => {
        try {
            // const cookie = req.cookies;
            const { token } = req.body;
            console.log(token);
            const existEmail = await db.User.findOne({
                where: { 
                    email: 
                    {
                        [Op.endsWith]: `${token}`,
                    }   
                }
            });
            console.log(existEmail)

            if(existEmail) {
                existEmail.email = atob(existEmail.email.split('@')[0]);
                existEmail.save();
            }
            // if( !cookie || cookie?.dataregister?.accessToken !== token) {

            //     res.clearCookie("dataregister", {
            //         httpOnly:true,
            //         secure:false,
            //         path:"/",
            //         sameSite:"strict",
            //     });

            //     return res.redirect(`${process.env.URL_CLIENT}/finalregister/failed`)
            // }
            // const {accessToken, ...newUser} = cookie?.dataregister;

            // const response = await db.User.create(newUser);

            // res.clearCookie("dataregister", {
            //     httpOnly:true,
            //     secure:false,
            //     path:"/",
            //     sameSite:"strict",
            // });
            
            // if(response) {
            //     return res.redirect(`${process.env.URL_CLIENT}/finalregister/success`)
            // } else {
            //     return res.redirect(`${process.env.URL_CLIENT}/finalregister/failed`)
            // }
            return res.status(200).json({
                mes: existEmail ? 'Đăng ký thành công!' : 'Xảy ra lỗi, hoặc đã quá thời gian cho phép!',
                response: existEmail
            })
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    //Login
    loginUser: async(req, res) => {
        try {
            const user = await db.User.findOne({where: {username: req.body.username}});
            if(!user) {
                return res.status(404).json("Tài khoản chưa đưuọc đăng ký!");
            }

            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password,
            );

            if(!validPassword) {
                return res.status(400).json("Hãy kiểm tra lại mật khẩu!")
            }

            if(user && validPassword) {
                const generateAccessToken = authController.generateAccessToken(user);
                const generateRefreshToken = authController.generateRefreshToken(user);
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
                const { passwordChangedAt, passwordResetExpires, passwordResetToken, password, refreshToken, createdAt, updatedAt, deletedAt, ...others } = user.dataValues;

                return res.status(200).json(
                    {
                        success: true,
                        dataUser: others, 
                        token: generateAccessToken
                    }
                );
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
        try {
            const cookie = req.cookies;
            console.log(cookie)
            if(!cookie || !cookie.refreshToken) {
                return res.status(401).json('Cookie rỗng!');
            }

            await db.User.update({refreshToken: ''},{
                where: {refreshToken: cookie.refreshToken}
            });
            res.clearCookie("refreshToken", {
                httpOnly:true,
                secure:false,
                path:"/",
                sameSite:"strict",
            });

            return res.status(200).json("Logged out!")
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    forgotPassword: async(req, res) => {
        try {
            const { email } = req.body;
            // console.log("email: ", req.body);
            if(!email) return res.json('Chưa có Mail!');
            const user = await db.User.findOne({where: { email }});
            console.log(user);
            if(!user) return res.json('Mail này chưa được đăng ký!');
            const resetToken = user.createPasswordChangedToken();
            console.log("resetToken : " + resetToken);
            await user.save();

            const html = `Vui lòng click vào link dưới đây để thay đổi mật khẩu. Link này sẽ hết hạn sau 10 phút kể từ bây giờ. 
            <a href=${process.env.URL_CLIENT}/reset-password/${resetToken}>Nhấn vào đây</a>`

            const data = {
                email,
                html,
                subject: 'Forgot password!'
            }

            const rs = await sendMail(data);

            return res.status(200).json({
                success: true,
                rs,
                mes: 'Hãy kiểm tra email của bạn.',
            })
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    resetPassword: async(req, res) => {
        const { token, password } = req.body;
        if(!token && !password) throw new Error('Chưa gửi!');
        const passwordResetToken = crypto.createHash('sha256').update(token).digest('hex');
        const user = await db.User.findOne({
            where: {
                passwordResetToken,
                // passwordResetExpires: { 
                //     [Op.gt]: Date.now()
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