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
            firstname: Yup.string().required("Vui lòng nhập họ của bạn."),
            lastname: Yup.string().required("Vui lòng nhập tên của bạn."),
            email: Yup.string().required("Vui lòng nhập email của bạn.").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Vui lòng nhập đúng định dạng email."),
            phone: Yup.string().required("Vui lòng nhập số điện thoại.").matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại phải là số và tối thiểu 10 kí tự."),
        })
        ,
        onSubmit: async(values) => {
            console.log(values)
        }
    });

    const handleEditProfile = (e) => {
        e.preventDefault();

        setEdit(!edit);
        const btn = document.querySelector('#btn-edit');

        btn.classList.toggle('active');
    }
    
    return (
        <div className="profile">
            <span className="profile__title">Hồ sơ của tôi</span>
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

                    {formik.errors.firstname && (
                        <p className="login__container__wrapper__form__error"> {formik.errors.firstname} </p>
                    )}
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
                    {formik.errors.lastname && (
                        <p className="login__container__wrapper__form__error"> {formik.errors.lastname} </p>
                    )}
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
                    {formik.errors.phone && (
                        <p className="login__container__wrapper__form__error"> {formik.errors.phone} </p>
                    )}
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
                    {formik.errors.email && (
                        <p className="login__container__wrapper__form__error"> {formik.errors.email} </p>
                    )}
                </div>
                
                <div className="profile__wrapper__img">
                    <img 
                        src={user.dataUser.image} 
                        alt="avatar"
                    />
                    <input 
                        id="input-file-img" 
                        className="profile__wrapper__img__input" 
                        accept=".jpg,.jpeg,.png" 
                        type="file" 
                        disabled={edit}
                    />
                    <label for={`input-file-img`} className={`${edit ? 'disable' : ''}`}>Chọn ảnh</label>
                    <span>Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG</span>
                </div>

                <button
                    id="btn-edit" 
                    className="profile__wrapper__btn-edit"
                    onClick={handleEditProfile}
                    >
                    <i class="ri-pencil-line profile__wrapper__btn-edit__ic"></i>
                    <i class="ri-pencil-fill profile__wrapper__btn-edit__ic-active"></i>
                </button>

                <button className="profile__wrapper__btn" type="submit">Lưu</button>
            </form>
        </div>
    )
}

export default Profile;