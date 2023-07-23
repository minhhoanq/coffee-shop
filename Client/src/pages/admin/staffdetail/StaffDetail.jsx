import React from "react";

import './staff-detail.scss';

const StaffDetail = () => {

    return (
        <div className="staff-detail">
            Thông tin nhân viên

            <div className="staff-detail__wrapper">
                <div className="staff-detail__wrapper__left">
                    <button className="staff-detail__wrapper__left__edit">
                        <i class="ri-pencil-fill"></i>
                    </button>
                    <img className="staff-detail__wrapper__left__img" src="https://cafefcdn.com/203337114487263232/2022/3/9/photo-1-1646783225090604277749.jpg" alt="" />
                    <div className="staff-detail__wrapper__left__body">
                        <span className="staff-detail__wrapper__left__body__name">
                            Minh Hoàng
                        </span>
                        <div className="staff-detail__wrapper__left__body__roles">
                            Quản lý
                        </div>
                    </div>

                    <form className="staff-detail__wrapper__left__footer">
                        <fieldset className="staff-detail__wrapper__left__footer__fielset" id="fielset" disabled={true}>
                            <legend>name</legend>
                            <input type="text" name="name" id="name" placeholder="Your Name" />
                        </fieldset>

                        <fieldset className="staff-detail__wrapper__left__footer__fielset" id="fielset" disabled={true}>
                            <legend>Date Job</legend>
                            <input type="text" name="name" id="name" placeholder="Date Job" />
                        </fieldset>

                        <fieldset className="staff-detail__wrapper__left__footer__fielset" id="fielset" disabled={true}>
                            <legend>name</legend>
                            <input type="text" name="name" id="name" placeholder="input" />
                        </fieldset>

                        <fieldset className="staff-detail__wrapper__left__footer__fielset" id="fielset" disabled={true}>
                            <legend>name</legend>
                            <input type="text" name="name" id="name" placeholder="input" />
                        </fieldset>
                    </form>
                </div>

                <div className="staff-detail__wrapper__right" >
                    <div className="staff-detail__wrapper__right__personal">
                        <button className="staff-detail__wrapper__right__personal__edit">
                            <i class="ri-pencil-fill"></i>
                        </button>
                        Thông tin cá nhân
                        <form className="staff-detail__wrapper__right__personal__form">
                            <fieldset className="staff-detail__wrapper__right__personal__form__username" id="fielset" disabled={true}>
                                <legend>Username</legend>
                                <input type="text" name="name" id="name" placeholder="Username" />
                            </fieldset>

                            <div className="staff-detail__wrapper__right__personal__form__2-input">
                                <fieldset className="staff-detail__wrapper__right__personal__form__2-input__fname" id="fielset" disabled={true}>
                                    <legend>Họ</legend>
                                    <input type="text" name="name" id="name" placeholder="Họ" />
                                </fieldset>

                                <fieldset className="staff-detail__wrapper__right__personal__form__2-input__lname" id="fielset" disabled={true}>
                                    <legend>Tên</legend>
                                    <input type="text" name="name" id="name" placeholder="Tên" />
                                </fieldset>
                            </div>

                            <div className="staff-detail__wrapper__right__personal__form__2-input">

                                <fieldset className="staff-detail__wrapper__right__personal__form__2-input__birth" id="fielset" disabled={true}>
                                    <legend>Ngày sinh</legend>
                                    <input 
                                        type="date" id="birthday" name="birthday"
                                        value="2002-05-15"
                                    />
                                </fieldset>

                                <select className="staff-detail__wrapper__right__personal__form__2-input__sex" disabled id="sexs" name="sexs">
                                    <option value="1">Nam</option>
                                    <option value="2">Nữ</option>
                                </select>

                            </div>

                            <fieldset className="staff-detail__wrapper__right__personal__form__address" id="fielset" disabled={true}>
                                <legend>Địa chỉ</legend>
                                <input type="text" name="name" id="name" placeholder="Địa chỉ" />
                            </fieldset>
                        </form>
                    </div>

                    <div className="staff-detail__wrapper__right__contact">
                        <button className="staff-detail__wrapper__right__contact__edit">
                            <i class="ri-pencil-fill"></i>
                        </button>
                        Thông tin liên hệ

                        <form className="staff-detail__wrapper__right__personal__form">
                            <fieldset className="staff-detail__wrapper__right__contact__form__phone" id="fielset" disabled={true}>
                                <legend>Số điện thoại</legend>
                                <input type="text" name="name" id="name" placeholder="Số điện thoại" />
                            </fieldset>

                            <fieldset className="staff-detail__wrapper__right__contact__form__email" id="fielset" disabled={true}>
                                <legend>Email</legend>
                                <input type="text" name="name" id="name" placeholder="Email" />
                            </fieldset>
                        </form>
                    </div>

                    <button className="staff-detail__wrapper__right__rs-password">
                        Gửi mật khẩu mới
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StaffDetail;