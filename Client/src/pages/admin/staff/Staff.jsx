import React, { useEffect, useState } from "react";

import './staff.scss';
import PersonCard from "../../../components/personcard/PersonCard";
import { getAllStaff } from "../../../redux/slice/apiRequest";
import Modal, { ModalContent } from "../../../components/modal/Modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from "yup";

const Staff = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        const getData = async() => {
            const result = await getAllStaff();
            setStaff(result.data.staffData);
        };

        getData();
    },[]);

    const handleAddStaff = (e) => {
        e.preventDefault();
        const modal = document.querySelector('#modal');
        modal.classList.toggle('active');
    }

    return (
        <div className="staff">
            <div className="staff__title">
                Quản lý nhân viên
            </div>

            <div className="staff__modal">
                <button className="staff__modal__btn-create" onClick={handleAddStaff}>
                    <i class="ri-user-add-line"></i>
                    <span>Thêm nhân viên</span>
    
                </button>
                <StaffCreate/>
            </div>

            <div className="staff__list-st">
                {staff.map((item, i) => (
                    <PersonCard item={item} key={i}/>
                ))}
            </div>
        </div>
    )
};

export const StaffCreate = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: "",
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            address: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Vui lòng nhập tên đăng nhập.").min(4, "Vui lòng nhập nhiều hơn 4 ký tự."),
            firstname: Yup.string().required("Vui lòng nhập họ của bạn."),
            lastname: Yup.string().required("Vui lòng nhập tên của bạn."),
            email: Yup.string().required("Vui lòng nhập email của bạn.").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Vui lòng nhập đúng định dạng email."),
            phone: Yup.string().required("Vui lòng nhập số điện thoại.").matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại phải là số và tối thiểu 10 kí tự."),
            address: Yup.string().required("Vui lòng nhập địa chỉ của bạn."),
            password: Yup.string().required("Vui lòng nhập số điện thoại.").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Mật khẩu tối thiểu tám ký tự, bao gồm ít nhất một chữ cái, một số và một ký tự đặc biệt."),
            confirmPassword: Yup.string().required("Vui lòng nhập lại mật khẩu.").oneOf([Yup.ref("password"),null], "Mật khẩu nhập lại không khớp."),
        }),
        onSubmit: (values) => {
            // registerUSer(values, dispatch, navigate);
            console.log(values)
        }
    });

    return (
        <Modal active={false} id={'modal'}>
            <ModalContent>
                <div className="staff__modal__form">
                    <div className="staff__modal__form__wrapper">
                        Thông tin nhân viên
                        <form className="staff__modal__form__wrapper__inner" onSubmit={formik.handleSubmit}>
                            <div className="staff__modal__form__wrapper__inner__info-login">
                                <div className="staff__modal__form__wrapper__inner__info-login__left">
                                    <span className="staff__modal__form__wrapper__inner__info-login__left__title">
                                        Thông tin đăng nhập
                                    </span>

                                    <input 
                                        className="staff__modal__form__wrapper__inner__info-login__left__email"
                                        placeholder="Email"
                                        type="email"
                                        id="email"
                                        name="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                    />
                                    {formik.errors.email && (
                                        <p className="register__container__wrapper__form__error"> {formik.errors.email} </p>
                                    )}

                                    <input 
                                        className="staff__modal__form__wrapper__inner__info-login__left__username"
                                        placeholder="Username"
                                        type="text"
                                        id="username"
                                        name="username"
                                        onChange={formik.handleChange}
                                        value={formik.values.username}
                                    />
                                    {formik.errors.username && (
                                        <p className="register__container__wrapper__form__error"> {formik.errors.username} </p>
                                    )}

                                    <input 
                                        className="staff__modal__form__wrapper__inner__info-login__left__password"
                                        placeholder="Mật khẩu"
                                        type="password"
                                        id="password"
                                        name="password"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                    />
                                    {formik.errors.password && (
                                        <p className="register__container__wrapper__form__error"> {formik.errors.password} </p>
                                    )}

                                    <input 
                                        className="staff__modal__form__wrapper__inner__info-login__left__password-cf"
                                        placeholder="Nhập lại mật khẩu"
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        onChange={formik.handleChange}
                                        value={formik.values.confirmPassword}
                                    />
                                    {formik.errors.confirmPassword && (
                                        <p className="register__container__wrapper__form__error"> {formik.errors.confirmPassword} </p>
                                    )}
                                </div>

                                <div className="staff__modal__form__wrapper__inner__info-login__right">
                                    Ảnh đại diện

                                    <div className="staff__modal__form__wrapper__inner__info-login__right__in">

                                        <img
                                            className="staff__modal__form__wrapper__inner__info-login__right__in__img"
                                            src="https://thuthuatnhanh.com/wp-content/uploads/2019/02/anh-dai-dien-dep-cho-zalo.jpeg" 
                                            alt=""
                                        />

                                        <div className="staff__modal__form__wrapper__inner__info-login__right__in__btn">
                                            <div className="staff__modal__form__wrapper__inner__info-login__right__in__btn__choose-img">
                                                Chọn ảnh
                                            </div>
        
                                            <span className="staff__modal__form__wrapper__inner__info-login__right__in__btn__note">
                                                Dạng file .jpg, .png, dung lượng dưới 300Kb với kích thước tối thiểu 300x300x pixel  
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="staff__modal__form__wrapper__inner__info-contact">
                                Thông tin liên hệ

                                <div className="staff__modal__form__wrapper__inner__info-contact__in">
                                    <div className="staff__modal__form__wrapper__inner__info-contact__in__left">
                                        <input 
                                            className="staff__modal__form__wrapper__inner__info-contact__in__left__fname"
                                            placeholder="Họ"
                                            type="text"
                                            id="firstname"
                                            name="firstname"
                                            onChange={formik.handleChange}
                                            value={formik.values.firstname}
                                        />
                                        {formik.errors.firstname && (
                                            <p className="register__container__wrapper__form__flname__hug__error"> {formik.errors.firstname} </p>
                                        )}
    
                                        <input 
                                            className="staff__modal__form__wrapper__inner__info-contact__in__left__lname"
                                            placeholder="Tên"
                                            type="text"
                                            id="lastname"
                                            name="lastname"
                                            onChange={formik.handleChange}
                                            value={formik.values.lastname}
                                        />
                                        {formik.errors.lastname && (
                                            <p className="register__container__wrapper__form__flname__hug__error"> {formik.errors.lastname} </p>
                                        )}
    
                                        <input 
                                            className="staff__modal__form__wrapper__inner__info-contact__in__left__phone"
                                            placeholder="Số điện thoại"
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            onChange={formik.handleChange}
                                            value={formik.values.phone}
                                        />
                                        {formik.errors.phone && (
                                            <p className="register__container__wrapper__form__flname__hug__error"> {formik.errors.phone} </p>
                                        )}
                                        
                                        <input 
                                            className="staff__modal__form__wrapper__inner__info-contact__in__left__address"
                                            placeholder="Địa chỉ"
                                            type="text"
                                            id="address"
                                            name="address"
                                            onChange={formik.handleChange}
                                            value={formik.values.address}
                                        />
                                        {formik.errors.address && (
                                            <p className="register__container__wrapper__form__flname__hug__error"> {formik.errors.address} </p>
                                        )}
                                    </div>
    
                                    <div className="staff__modal__form__wrapper__inner__info-contact__in__right">
                                        <select id="roles" name="roles">
                                            <option value="1">Quản lý</option>
                                            <option value="2">Nhân viên</option>
                                        </select>
                                        
                                        <select id="sexs" name="sexs">
                                            <option value="1">Nam</option>
                                            <option value="2">Nữ</option>
                                        </select>

                                        <div className="staff__modal__form__wrapper__inner__info-contact__in__right__birth">
                                            <label for="birthday">Birthday:</label>
                                            <input 
                                                type="date" id="birthday" name="birthday"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="staff__modal__form__wrapper__inner__submit" type="submit">Thêm mới</button>  
                        </form>
                    </div>
                </div>
            </ModalContent>
        </Modal>
    )
}

export default Staff;