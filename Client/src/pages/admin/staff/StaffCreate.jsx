import React, { useState } from "react";

import './staff.scss';
import Modal, {ModalContent} from '../../../components/modal/Modal';
import { registerStaff } from "../../../redux/slice/apiRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from "yup";

const StaffCreate = () => {
    // const [username, setUsername] = useState('');
    // const [firstname, setFirstname] = useState('');
    // const [lastname, setLastname] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [phone, setPhone] = useState('');
    // const [address, setAddress] = useState('');
    // const [birth, setBirth] = useState('');
    // const [sex, setSex] = useState('Nam');
    // const [roles, setRoles] = useState('1');
    // const [msg, setMsg] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const Validate = (staff) => {
    //     if(staff.username || 
    //         staff.firstname || 
    //         staff.lastname || 
    //         staff.email || 
    //         staff.password || 
    //         staff.confirmPassword || 
    //         staff.phone || 
    //         staff.address || 
    //         staff.birth === "") {
    //             console.log("Check");
    //             setMsg('Vui lòng điền đầy đủ thông tin.')
    //             return false;
    //     }

    //     return true;
    // } 

    // const handleSubmit = async(e) => {
    //     e.preventDefault();

    //     const staff = {
            // username,
            // firstname,
            // lastname,
            // email,
            // password,
            // confirmPassword,
            // phone,
            // address,
            // birth,
            // sex,
            // roles,
    //     }
    //     console.log(staff);

    //     const validate = Validate(staff);
    //     console.log(validate);
    //     if(validate) {
    //         // await registerStaff(staff, dispatch, navigate);
    //         // navigate('/admin/staff');
    //         // window.location.reload(false);
    //         // return;
    //     }

    //     return;
    // }

    const formik = useFormik({
        initialValues: {
            username: "",
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
            address: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Vui lòng nhập tên đăng nhập.").min(4, "Vui lòng nhập nhiều hơn 4 ký tự."),
            firstname: Yup.string().required("Vui lòng nhập họ của bạn."),
            lastname: Yup.string().required("Vui lòng nhập tên của bạn."),
            email: Yup.string().required("Vui lòng nhập email của bạn.").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Vui lòng nhập đúng định dạng email."),
            phone: Yup.string().required("Vui lòng nhập số điện thoại.").matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại phải là số và tối thiểu 10 kí tự."),
            password: Yup.string().required("Vui lòng nhập mật khẩu.").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Mật khẩu tối thiểu tám ký tự, bao gồm ít nhất một chữ cái, một số và một ký tự đặc biệt."),
            confirmPassword: Yup.string().required("Vui lòng nhập lại mật khẩu.").oneOf([Yup.ref("password"),null], "Mật khẩu nhập lại không khớp."),
            address: Yup.string().required("Vui lòng nhập địa chỉ của bạn."),
        })
        ,
        onSubmit: async(values) => {
            const response = await registerStaff(values, dispatch, navigate);
            console.log(response.data.status);
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
                                        // onChange={(e) => setEmail(e.target.value)}
                                        // value={email}
                                    />

                                    <input 
                                        className="staff__modal__form__wrapper__inner__info-login__left__username"
                                        placeholder="Username"
                                        type="text"
                                        id="username"
                                        name="username"
                                        onChange={formik.handleChange}
                                        value={formik.values.username}
                                        // onChange={(e) => setUsername(e.target.value)}
                                        // value={username}
                                    />

                                    <input 
                                        className="staff__modal__form__wrapper__inner__info-login__left__password"
                                        placeholder="Mật khẩu"
                                        type="password"
                                        id="password"
                                        name="password"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        // onChange={(e) => setPassword(e.target.value)}
                                        // value={password}
                                    />

                                    <input 
                                        className="staff__modal__form__wrapper__inner__info-login__left__password-cf"
                                        placeholder="Nhập lại mật khẩu"
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        onChange={formik.handleChange}
                                        value={formik.values.confirmPassword}
                                        // onChange={(e) => setConfirmPassword(e.target.value)}
                                        // value={confirmPassword}
                                    />
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
                                            // onChange={(e) => setFirstname(e.target.value)}
                                            // value={firstname}
                                        />
    
                                        <input 
                                            className="staff__modal__form__wrapper__inner__info-contact__in__left__lname"
                                            placeholder="Tên"
                                            type="text"
                                            id="lastname"
                                            name="lastname"
                                            onChange={formik.handleChange}
                                            value={formik.values.lastname}
                                            // onChange={(e) => setLastname(e.target.value)}
                                            // value={lastname}
                                        />
    
                                        <input 
                                            className="staff__modal__form__wrapper__inner__info-contact__in__left__phone"
                                            placeholder="Số điện thoại"
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            onChange={formik.handleChange}
                                            value={formik.values.phone}
                                            // onChange={(e) => setPhone(e.target.value)}
                                            // value={phone}
                                        />
                                        
                                        <input 
                                            className="staff__modal__form__wrapper__inner__info-contact__in__left__address"
                                            placeholder="Địa chỉ"
                                            type="text"
                                            id="address"
                                            name="address"
                                            onChange={formik.handleChange}
                                            value={formik.values.address}
                                            // onChange={(e) => setAddress(e.target.value)}
                                            // value={address}
                                        />
                                    </div>
    
                                    <div className="staff__modal__form__wrapper__inner__info-contact__in__right">
                                        <select id="roles" name="roles"
                                            // onChange={(e) => setRoles(e.target.value)}
                                            >
                                            <option value="1">Quản lý</option>
                                            <option value="2">Nhân viên</option>
                                        </select>
                                        
                                        <select id="sexs" name="sexs" value={1}
                                            // onChange={(e) => setSex(e.target.value)}
                                            >
                                            <option value="1">Nam</option>
                                            <option value="2">Nữ</option>
                                        </select>

                                        <div className="staff__modal__form__wrapper__inner__info-contact__in__right__birth">
                                            <label for="birthday">Birthday:</label>
                                            <input 
                                                type="date" id="birthday" name="birthday"
                                                // onChange={(e) => setBirth(e.target.value)}
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

export default StaffCreate;