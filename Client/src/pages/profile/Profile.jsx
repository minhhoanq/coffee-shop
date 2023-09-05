import React from "react";

import './profile.scss';
import { useSelector } from "react-redux";

const Profile = () => {

    const user = useSelector((state) => state.auth?.currentUser);
    console.log(user);

    return (
        <div className="profile">
            <span className="profile__title">Hồ sơ của tôi</span>
            <span className="profile__title-2">Quản lý thông tin hồ sơ để bảo mật tài khoản</span>

            <div className="profile__wrapper">
                <form className="profile__wrapper__form">
                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={false}>
                        <legend>Tên đăng nhập</legend>
                        <input type="text" name="name" id="name" placeholder="Tên đăng nhập" value={user.dataUser.username} />
                    </fieldset>
                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={false} >
                        <legend>Họ</legend>
                        <input type="text" name="name" id="name" placeholder="Họ" value={user.dataUser.firstname}/>
                    </fieldset>
                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={false}>
                        <legend>Tên</legend>
                        <input type="text" name="name" id="name" placeholder="Tên" value={user.dataUser.firstname}/>
                    </fieldset>

                    <select className="profile__wrapper__form__fielset" id="sexs" name="sexs" value={`${user.dataUser.sex === 'Nam' ? '1': '2'}`}>
                        <option value="1">Nam</option>
                        <option value="2">Nữ</option>
                    </select>

                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={true}>
                        <legend>Ngày sinh</legend>
                        <input 
                            type="date" id="birthday" name="birthday"
                            value={Date(user.dataUser.birth)}
                        />
                    </fieldset>

                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={false}>
                        <legend>Số điện thoại</legend>
                        <input type="text" name="name" id="name" placeholder="Số điện thoại" value={user.dataUser.phone}/>
                    </fieldset>

                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={false}>
                        <legend>Địa chỉ email</legend>
                        <input type="email" name="name" id="name" placeholder="Địa chỉ email" value={user.dataUser.email}/>
                    </fieldset>
                </form>

                <div className="profile__wrapper__img">
                    <img 
                        src={user.dataUser.image} 
                        alt="avatar"
                    />
                    <input type="file"/>
                    <span>Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG</span>
                </div>
                <button className="profile__wrapper__btn">Lưu</button>
            </div>
        </div>
    )
}

export default Profile;