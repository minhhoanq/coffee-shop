import React, { useState } from "react"

import './reset-password.scss';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

import googleImg from '../../assets/images/google.png';
// import { forgot-passwordUSer } from "../../api/authApi";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const ResetPassword = () => {

    const formik = useFormik({
        initialValues: {
            password: "",
            confirmpassword: "",
        },
        validationSchema: Yup.object({
            password: Yup.string().required("Vui lòng nhập mật khẩu mới."),
            confirmpassword: Yup.string().required("Vui lòng nhập lại mật khẩu mới.").oneOf([Yup.ref("password"),null], "Mật khẩu nhập lại không khớp."),
        }),
        onSubmit: (values) => {
            console.log("check");
        }
    })

    return (

        <div className="forgot-password">

        <div className="forgot-password__container">
            <div className="forgot-password__container__wrapper">
                <div className="forgot-password__container__wrapper__logo">
                <i class="ri-rotate-lock-fill"></i>
                </div>

                <span className="forgot-password__container__wrapper__ques">Sự cố khi đăng nhập ?</span>

                <p className="forgot-password__container__wrapper__text">
                    Nhập email, điện thoại hoặc tên người dùng của bạn và chúng tôi sẽ gửi cho bạn một liên kết để quay lại tài khoản của bạn.
                </p>

                <form action="" className="forgot-password__container__wrapper__form" onSubmit={formik.handleSubmit}>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="forgot-password__container__wrapper__form__username" 
                        placeholder="Nhập mật khẩu mới" 
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        />
                    {formik.errors.password && (
                        <p className="forgot-password__container__wrapper__form__error"> {formik.errors.password} </p>
                    )}


                    <input
                        type="password"
                        id="confirmpassword"
                        name="confirmpassword"
                        className="forgot-password__container__wrapper__form__username" 
                        placeholder="Xác nhận mật khẩu" 
                        onChange={formik.handleChange}
                        value={formik.values.confirmpassword}
                        />
                    {formik.errors.confirmpassword && (
                        <p className="forgot-password__container__wrapper__form__error"> {formik.errors.confirmpassword} </p>
                    )}

                    <Button type={"submit"} className="forgot-password__container__wrapper__form__btn-forgot-password" >Xác nhận</Button>
                </form>

                <div className="forgot-password__container__wrapper__bulkhead">
                    <div className="forgot-password__container__wrapper__bulkhead__line-left">
                    </div>

                    <span className="forgot-password__container__wrapper__bulkhead__or">
                        OR
                    </span>

                    <div className="forgot-password__container__wrapper__bulkhead__line-right">

                    </div>
                </div>

                <Link className="forgot-password__container__wrapper__forgot-pw">Không thể thay đổi mật khẩu?</Link>
            </div>

            <div className="forgot-password__container__signup">
                Tạo tài khoản mới ?
                <Link to={'/register'} className="forgot-password__container__signup__link">Đăng ký</Link>
            </div>

            <div className="forgot-password__container__app">

            </div>
        </div>
    </div>
    )
}

export default ResetPassword;