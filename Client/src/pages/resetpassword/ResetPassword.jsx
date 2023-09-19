import React, { useState } from "react"

import './reset-password.scss';
import { Link, useParams } from 'react-router-dom';
import Button from '../../components/button/Button';

import googleImg from '../../assets/image/google.png';
// import { forgot-passwordUSer } from "../../api/authApi";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { resetPasswordUser } from "../../api/authApi";

const ResetPassword = () => {

    const { token } = useParams();

    const formik = useFormik({
        initialValues: {
            password: "",
            confirmpassword: "",
        },
        validationSchema: Yup.object({
            password: Yup.string().required("Vui lòng nhập mật khẩu.").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Mật khẩu tối thiểu tám ký tự, bao gồm ít nhất một chữ cái, một số và một ký tự đặc biệt."),
            confirmpassword: Yup.string().required("Vui lòng nhập lại mật khẩu.").oneOf([Yup.ref("password"),null], "Mật khẩu nhập lại không khớp."),
        }),
        onSubmit: async(values) => {
            const resetpw = await resetPasswordUser(token, values.password);
            //loading...
            console.log(resetpw);
        }
    })

    return (

        <div className="forgot-password">

        <div className="forgot-password__container">
            <div className="forgot-password__container__wrapper">
                <div className="forgot-password__container__wrapper__logo">
                <i class="ri-rotate-lock-fill"></i>
                </div>

                <span className="forgot-password__container__wrapper__ques">Đổi mới gì đó vẫn tốt mà.</span>

                <p className="forgot-password__container__wrapper__text">
                    Hãy nhập mật khẩu mà bạn muốn thay đổi, ghi nhớ hoặc ghi chú vào nơi bí mật nhé.
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