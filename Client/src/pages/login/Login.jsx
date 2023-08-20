import React, { useState } from "react"

import './login.scss';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

import googleImg from '../../assets/images/google.png';
import { loginUSer } from "../../api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginActions } from "../../redux/asyncActions/authActions";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const location = useLocation();
    const isFetching = useSelector(state => state.auth.isFetching);

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Vui lòng nhập tên đăng nhập."),
            password: Yup.string().required("Vui lòng nhập mật khẩu."),
        })
        ,
        onSubmit: async(values) => {
            const response = await dispatch(loginActions(values));
            if(response.meta.requestStatus === 'fulfilled') {
                navigate('/');
            }
        }
    })

    return (
        <div className="login">
            <img className="login__img" src="https://file.hstatic.net/200000351187/file/blog_-_6_cong_thuc_bacxiu_6bdee6c825024cbab10fa0bdab903e8e_1024x1024.png"/>

            <div className="login__container">
                <div className="login__container__wrapper">
                    <div className="login__container__wrapper__logo">
                        <i class="ri-cup-line"></i>
                    </div>

                    <form action="" className="login__container__wrapper__form" onSubmit={formik.handleSubmit}>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="login__container__wrapper__form__username" 
                            placeholder="Số điện thoại, tên đăng nhập hoặc email" 
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            />
                        {formik.errors.username && (
                            <p className="login__container__wrapper__form__error"> {formik.errors.username} </p>
                        )}

                        <input 
                            type="password" 
                            id="password"
                            name="password"
                            className="login__container__wrapper__form__password" 
                            placeholder="Mật khẩu" 
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            />
                        {formik.errors.password && (
                            <p className="login__container__wrapper__form__error"> {formik.errors.password} </p>
                        )}

                        <Button type={"submit"} className="login__container__wrapper__form__btn-login" >Đăng nhập</Button>
                    </form>

                    <div className="login__container__wrapper__bulkhead">
                        <div className="login__container__wrapper__bulkhead__line-left">
                        </div>

                        <span className="login__container__wrapper__bulkhead__or">
                            OR
                        </span>

                        <div className="login__container__wrapper__bulkhead__line-right">

                        </div>
                    </div>

                    <button className="login__container__wrapper__with">
                        <img src={googleImg} alt="" />
                        Đăng nhập bằng tài khoản Google
                    </button>

                    <Link to={'/forgot-password'} className="login__container__wrapper__forgot-pw">Quên mật khẩu?</Link>
                </div>

                <div className="login__container__signup">
                    Bạn chưa có tài khoản ?
                    <Link to={'/register'} className="login__container__signup__link">Đăng ký</Link>
                </div>

                <div className="login__container__app">

                </div>
            </div>
        </div>
    )
}

export default Login;