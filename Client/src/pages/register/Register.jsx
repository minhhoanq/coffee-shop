import React, { useRef, useState } from "react"

import './register.scss';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

import googleImg from '../../assets/images/google.png';
import { finalRegister, registerUSer } from "../../api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from "yup";

const Register = () => {
    const [token, setToken] = useState('');
    const [mesToken, setMesToken] = useState('');

    const dispatch = useDispatch();
    const isFetching = useSelector(state => state.auth.register?.isFetching);
    const modalCode = useRef(null);
    const overlay = useRef(null);

    const formik = useFormik({
        initialValues: {
            username: "",
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        },
        // validationSchema: Yup.object({
        //     username: Yup.string().required("Vui lòng nhập tên đăng nhập.").min(4, "Vui lòng nhập nhiều hơn 4 ký tự."),
        //     firstname: Yup.string().required("Vui lòng nhập họ của bạn."),
        //     lastname: Yup.string().required("Vui lòng nhập tên của bạn."),
        //     email: Yup.string().required("Vui lòng nhập email của bạn.").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Vui lòng nhập đúng định dạng email."),
        //     phone: Yup.string().required("Vui lòng nhập số điện thoại.").matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại phải là số và tối thiểu 10 kí tự."),
        //     password: Yup.string().required("Vui lòng nhập mật khẩu.").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Mật khẩu tối thiểu tám ký tự, bao gồm ít nhất một chữ cái, một số và một ký tự đặc biệt."),
        //     confirmPassword: Yup.string().required("Vui lòng nhập lại mật khẩu.").oneOf([Yup.ref("password"),null], "Mật khẩu nhập lại không khớp."),
        // }),
        onSubmit: (values) => {
            registerUSer(values, dispatch);
            console.log(isFetching);

            modalCode.current.classList.add('show');
            overlay.current.classList.add('ovl');
        }
    });

    const handleChangeToken = (e) => {
        const inputToken = (e.target.value).trim();
        setToken(inputToken)
        setMesToken('');
    }

    const handleSubmitCode = async(e) => {
        e.preventDefault();
        if(token === '') {
            setMesToken('Không bỏ trống.')
            return;
        }
        const submitCode = await finalRegister(token);

        console.log(submitCode);
        modalCode.current.classList.remove('show');
        overlay.current.classList.remove('ovl');
        setToken('')
    }

    return (
        <div className="register">
            <div className="register__overlay" ref={overlay}></div>
            <div className="register__modal" ref={modalCode}>
                <div className="register__modal__txt">
                    Đây là bước cuối cùng, hãy kiểm tra mail của bạn và nhập code để tạo tài khoản.
                    <br/>
                    <span>Còn lại ( 12:00 )</span>
                </div>
                <div className="register__modal__input">
                    <div className="register__modal__input__wrapper">
                        <input 
                            className="register__modal__input__wrapper__content" 
                            type="text" 
                            placeholder="Code"
                            value={token}
                            onChange={handleChangeToken}
                            />
                        <span>{mesToken}</span>
                    </div>
                    <button 
                        className="register__modal__input__btn"
                        onClick={handleSubmitCode}
                        >Xác nhận</button>
                </div>
            </div>
            <img className="register__img" src="https://file.hstatic.net/200000351187/file/blog_-_6_cong_thuc_bacxiu_6bdee6c825024cbab10fa0bdab903e8e_1024x1024.png"/>
            <div className="register__container">
                <div className="register__container__wrapper">
                    <div className="register__container__wrapper__logo">
                        <i class="ri-cup-line"></i>
                    </div>

                    <form className="register__container__wrapper__form" onSubmit={formik.handleSubmit}>

                        <input 
                            type="text" 
                            id="username"
                            name="username"
                            className="register__container__wrapper__form__username" 
                            placeholder="Tên đăng nhập" 
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            />
                        {formik.errors.username && (
                            <p className="register__container__wrapper__form__error"> {formik.errors.username} </p>
                        )}

                        <div className="register__container__wrapper__form__flname">
                            <div className="register__container__wrapper__form__flname__hug">
                                <input 
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    className="register__container__wrapper__form__flname__hug__fname" 
                                    placeholder="Họ"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstname}
                                    />

                                {formik.errors.firstname && (
                                    <p className="register__container__wrapper__form__flname__hug__error"> {formik.errors.firstname} </p>
                                )}
                            </div>

                            <div className="register__container__wrapper__form__flname__hug">
                                <input 
                                    type="text" 
                                    id="lastname"
                                    name="lastname"
                                    className="register__container__wrapper__form__flname__hug__lname" 
                                    placeholder="Tên"
                                    onChange={formik.handleChange}
                                    value={formik.values.lastname}
                                />
                                {formik.errors.lastname && (
                                    <p className="register__container__wrapper__form__flname__hug__error"> {formik.errors.lastname} </p>
                                )}
                            </div>

                        </div>

                        <input 
                            type="text"
                            id="email"
                            name="email"
                            className="register__container__wrapper__form__email" 
                            placeholder="Email" 
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            />
                        {formik.errors.email && (
                            <p className="register__container__wrapper__form__error"> {formik.errors.email} </p>
                        )}

                        <input 
                            type="text"
                            id="phone"
                            name="phone"
                            className="register__container__wrapper__form__phone" 
                            placeholder="Số điện thoại" 
                            onChange={formik.handleChange}
                            value={formik.values.phone}/>
                        {formik.errors.phone && (
                            <p className="register__container__wrapper__form__error"> {formik.errors.phone} </p>
                        )}

                        <input 
                            type="password"
                            id="password"
                            name="password"
                            className="register__container__wrapper__form__password" 
                            placeholder="Mật khẩu" 
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            />
                        {formik.errors.password && (
                            <p className="register__container__wrapper__form__error"> {formik.errors.password} </p>
                        )}

                        <input 
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="register__container__wrapper__form__password" 
                            placeholder="Nhập lại mật khẩu" 
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                            />
                        {formik.errors.confirmPassword && (
                            <p className="register__container__wrapper__form__error"> {formik.errors.confirmPassword} </p>
                        )}

                        <Button className="register__container__wrapper__form__btn-register" type="submit" >Đăng ký</Button>
                    </form>

                    <div className="register__container__wrapper__bulkhead">
                        <div className="register__container__wrapper__bulkhead__line-left">
                        </div>

                        <span className="register__container__wrapper__bulkhead__or">
                            OR
                        </span>

                        <div className="register__container__wrapper__bulkhead__line-right">

                        </div>
                    </div>

                    <button className="register__container__wrapper__with">
                        <img src={googleImg} alt="" />
                        Đăng ký bằng tài khoản Google
                    </button>

                    <Link to={'/forgot-password'} className="register__container__wrapper__forgot-pw">Quên mật khẩu?</Link>
                </div>

                <div className="register__container__signin">
                    Bạn đã có tài khoản ?
                    <Link to={'/login'} className="register__container__signin__link">Đăng nhập</Link>
                </div>

                <div className="register__container__app">

                </div>
            </div>
        </div>
    );
}

export default Register;