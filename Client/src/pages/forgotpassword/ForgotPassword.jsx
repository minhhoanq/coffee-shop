import React, { useState } from "react"

import './forgot-password.scss';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

import googleImg from '../../assets/images/google.png';
// import { forgot-passwordUSer } from "../../api/authApi";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const ForgotPassword = () => {
    return (

        <div className="forgot-password">

        <div className="forgot-password__container">
            <div className="forgot-password__container__wrapper">
                <div className="forgot-password__container__wrapper__logo">
                    <i class="ri-rotate-lock-line"></i>
                </div>

                <span className="forgot-password__container__wrapper__ques">Sự cố khi đăng nhập ?</span>

                <p className="forgot-password__container__wrapper__text">
                    Nhập email, điện thoại hoặc tên người dùng của bạn và chúng tôi sẽ gửi cho bạn một liên kết để quay lại tài khoản của bạn.
                </p>

                {/* onSubmit={formik.handleSubmit} */}
                <form action="" className="forgot-password__container__wrapper__form" >
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="forgot-password__container__wrapper__form__username" 
                        placeholder="Số điện thoại, tên đăng nhập hoặc email" 
                        // onChange={formik.handleChange}
                        // value={formik.values.username}
                        />
                    {/* {formik.errors.username && (
                        <p className="forgot-password__container__wrapper__form__error"> {formik.errors.username} </p>
                    )} */}

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

                <Link className="forgot-password__container__wrapper__forgot-pw">Không thể thay đổi lại mật khẩu?</Link>
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

export default ForgotPassword;