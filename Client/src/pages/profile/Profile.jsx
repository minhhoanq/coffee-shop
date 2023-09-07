import React, { useState } from "react";

import './profile.scss';
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

const Profile = () => {
    const user = useSelector((state) => state.auth?.currentUser);
    const [edit, setEdit] = useState(true);

    const formik = useFormik({
        initialValues: {
            username: user.dataUser.username,
            firstname: user.dataUser.firstname,
            lastname: user.dataUser.lastname,
            sex: user.dataUser.sex,
            birth: user.dataUser.birth,
            phone: user.dataUser.phone,
            email: user.dataUser.email,
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Vui lòng nhập tên đăng nhập."),
            // password: Yup.string().required("Vui lòng nhập mật khẩu."),
        })
        ,
        onSubmit: async(values) => {
            console.log(values)
        }
    })
    
    return (
        <div className="profile">
            <span className="profile__title" onClick={() => setEdit(!edit)}>Hồ sơ của tôi</span>
            <span className="profile__title-2">Quản lý thông tin hồ sơ để bảo mật tài khoản</span>

            <form className="profile__wrapper" onSubmit={formik.handleSubmit}>
                <div className="profile__wrapper__form" >
                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={edit}>
                        <legend>Tên đăng nhập</legend>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            placeholder="Tên đăng nhập" 
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                    </fieldset>

                    {formik.errors.username && (
                            <p className="login__container__wrapper__form__error"> {formik.errors.username} </p>
                        )}
                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={edit} >
                        <legend>Họ</legend>
                        <input 
                            type="text" 
                            name="firstname" 
                            id="firstname" 
                            placeholder="Họ" 
                            onChange={formik.handleChange}
                            value={formik.values.firstname}

                        />
                    </fieldset>
                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={edit}>
                        <legend>Tên</legend>
                        <input 
                            type="text"
                            name="lastname" 
                            id="lastname" 
                            placeholder="Tên" 
                            onChange={formik.handleChange}
                            value={formik.values.lastname}

                        />
                    </fieldset>

                    <select 
                        className="profile__wrapper__form__fielset" 
                        id="sex" name="sex" 
                        value={formik.values.sex === "Nam" ? '1' : '2'}
                        onChange={formik.handleChange}
                        disabled={edit}
                        >
                        <option value="1">Nam</option>
                        <option value="2">Nữ</option>
                    </select>

                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={edit}>
                        <legend>Ngày sinh</legend>
                        <input 
                            type="date" id="birth" name="birth"
                            onChange={formik.handleChange}
                            value={formik.values.birth}

                        />
                    </fieldset>

                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={edit}>
                        <legend>Số điện thoại</legend>
                        <input 
                            type="text" 
                            name="phone" 
                            id="phone"
                            placeholder="Số điện thoại" 
                            onChange={formik.handleChange}
                            value={formik.values.phone}

                        />
                    </fieldset>

                    <fieldset className="profile__wrapper__form__fielset" id="fielset" disabled={edit}>
                        <legend>Địa chỉ email</legend>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Địa chỉ email" 
                            onChange={formik.handleChange}
                            value={formik.values.email}

                        />
                    </fieldset>
                </div>

                <div className="profile__wrapper__img">
                    <img 
                        src={user.dataUser.image} 
                        alt="avatar"
                    />
                    <input type="file"/>
                    <span>Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG</span>
                </div>
                <button className="profile__wrapper__btn" type="submit">Lưu</button>
            </form>
        </div>
    )
}

export default Profile;