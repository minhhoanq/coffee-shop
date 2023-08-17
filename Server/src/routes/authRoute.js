const authController = require("../controllers/authController");
const isAuth = require("../middlewares/isAuth");
const {check, body} = require("express-validator");
const dbUser = require("../models");

const router = require("express").Router();

//Register
router.post(
    "/register", 
    [
        check('firstname')
            .notEmpty()
            .withMessage('Họ không được để trống'),
        check('lastname')
            .notEmpty()
            .withMessage('Tên không được để trống'),
        body('username', 'Tên đăng nhập không được để trống')
            .isLength({ min: 6 })
            .trim()
            .withMessage('Tên đăng nhập phải tối thiểu 6 ký tự')
            .custom(async (value, {req}) => {
                if (value === 'admin') {
                    throw new Error('Tên đăng nhập bị cấm');
                } else {
                    const userRepo = dbUser.User;
                    return userRepo.findOne({ where: { username: value } })
                        .then(userDoc => {
                            if (userDoc) {
                                return Promise.reject(
                                    'Tên đăng nhập đã tồn tại, vui lòng chọn một tên khác'
                                );
                            }
                    });
                }
            }),
        check('email', 'Địa chỉ email không được để trống')
            .notEmpty()
            .isEmail()
            .trim()
            .withMessage('Địa chỉ email không hợp lệ')  
            .custom(async (value, {req}) => {
                const userRepo = dbUser.User;
                return userRepo.findOne({ where: { email: value } })
                    .then(userDoc => {
                        if (userDoc) {
                            return Promise.reject(
                                'Địa chỉ email này đã được dùng để đăng ký tài khoản khác'
                            );
                        }
                });
            }),
       
        body('password', 'Mật khẩu phải tối thiểu 6 ký tự')
            .isLength({ min: 6 })
            .trim()
            .withMessage('Mật khẩu không hợp lệ'),
        body('confirmPassword')
            .trim()
            .custom((value, {req}) => {
                if (value !== req.body.password) {
                    throw new Error('Xác nhận mật khẩu không chính xác');
                }
                return true; 
            }),
        check('phone', 'Số điện thoại không được để trống')
            .notEmpty()
            .isNumeric()
            .isLength({ min: 10 })
            .withMessage('Số điện thoại phải là số và tối thiểu 10 kí tự')
            .custom(async (value, {req}) => {
                const userRepo = dbUser.User;
                return userRepo.findOne({ where: { phone: value } })
                    .then(userDoc => {
                        if (userDoc) {
                            return Promise.reject(
                                'Số điện thoại này đã được dùng để đăng ký tài khoản khác'
                            );
                        }
                });
            }),
    ],
    authController.registerUser);

router.put(
    "/finalregister/:token", 
    [
        check('firstname')
            .notEmpty()
            .withMessage('Họ không được để trống'),
        check('lastname')
            .notEmpty()
            .withMessage('Tên không được để trống'),
        body('username', 'Tên đăng nhập không được để trống')
            .isLength({ min: 6 })
            .trim()
            .withMessage('Tên đăng nhập phải tối thiểu 6 ký tự')
            .custom(async (value, {req}) => {
                if (value === 'admin') {
                    throw new Error('Tên đăng nhập bị cấm');
                } else {
                    const userRepo = dbUser.User;
                    return userRepo.findOne({ where: { username: value } })
                        .then(userDoc => {
                            if (userDoc) {
                                return Promise.reject(
                                    'Tên đăng nhập đã tồn tại, vui lòng chọn một tên khác'
                                );
                            }
                    });
                }
            }),
        check('email', 'Địa chỉ email không được để trống')
            .notEmpty()
            .isEmail()
            .trim()
            .withMessage('Địa chỉ email không hợp lệ')  
            .custom(async (value, {req}) => {
                const userRepo = dbUser.User;
                return userRepo.findOne({ where: { email: value } })
                    .then(userDoc => {
                        if (userDoc) {
                            return Promise.reject(
                                'Địa chỉ email này đã được dùng để đăng ký tài khoản khác'
                            );
                        }
                });
            }),
        
        body('password', 'Mật khẩu phải tối thiểu 6 ký tự')
            .isLength({ min: 6 })
            .trim()
            .withMessage('Mật khẩu không hợp lệ'),
        body('confirmPassword')
            .trim()
            .custom((value, {req}) => {
                if (value !== req.body.password) {
                    throw new Error('Xác nhận mật khẩu không chính xác');
                }
                return true; 
            }),
        check('phone', 'Số điện thoại không được để trống')
            .notEmpty()
            .isNumeric()
            .isLength({ min: 10 })
            .withMessage('Số điện thoại phải là số và tối thiểu 10 kí tự')
            .custom(async (value, {req}) => {
                const userRepo = dbUser.User;
                return userRepo.findOne({ where: { phone: value } })
                    .then(userDoc => {
                        if (userDoc) {
                            return Promise.reject(
                                'Số điện thoại này đã được dùng để đăng ký tài khoản khác'
                            );
                        }
                });
            }),
    ],
    authController.finalRegister);
//Login
router.post("/login", authController.loginUser);

//Refreshtoken
router.post("/refresh", authController.requestRefreshToken);

//Logout
router.post("/logout", isAuth.verifyToken, authController.logOutUser);

router.post("/forgot-password", authController.forgotPassword);

router.post("/reset-password", authController.resetPassword);

module.exports = router;