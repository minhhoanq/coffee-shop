import React from "react";

import './profile.scss';

const Profile = () => {
    return (
        <div className="profile">
            <span className="profile__title">Hồ sơ của tôi</span>
            <span className="profile__title-2">Quản lý thông tin hồ sơ để bảo mật tài khoản</span>

            <div className="profile__wrapper">
                <form className="profile__wrapper__form">
                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={false}>
                        <legend>Tên đăng nhập</legend>
                        <input type="text" name="name" id="name" placeholder="Tên đăng nhập" />
                    </fieldset>
                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={false}>
                        <legend>Họ</legend>
                        <input type="text" name="name" id="name" placeholder="Họ" />
                    </fieldset>
                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={false}>
                        <legend>Tên</legend>
                        <input type="text" name="name" id="name" placeholder="Tên" />
                    </fieldset>

                    <select className="profile__wrapper__form__fielset" id="sexs" name="sexs">
                        <option value="1">Nam</option>
                        <option value="2">Nữ</option>
                    </select>

                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={true}>
                        <legend>Ngày sinh</legend>
                        <input 
                            type="date" id="birthday" name="birthday"
                            value="2002-05-15"
                        />
                    </fieldset>

                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={false}>
                        <legend>Số điện thoại</legend>
                        <input type="text" name="name" id="name" placeholder="Số điện thoại" />
                    </fieldset>

                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={false}>
                        <legend>Địa chỉ email</legend>
                        <input type="email" name="name" id="name" placeholder="Địa chỉ email" />
                    </fieldset>
                </form>

                <div className="profile__wrapper__img">
                    img
                </div>
            </div>
        </div>
    )
}

export default Profile;