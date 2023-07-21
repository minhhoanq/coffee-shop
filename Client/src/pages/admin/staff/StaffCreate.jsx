import React, { useState } from "react";

import './staff.scss';
import Modal, {ModalContent} from '../../../components/modal/Modal';
import { registerStaff } from "../../../redux/slice/apiRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const StaffCreate = () => {
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [birth, setBirth] = useState('');
    const [sex, setSex] = useState('Nam');
    const [roles, setRoles] = useState('1');
    const [msg, setMsg] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const Validate = ({username, firstname, lastname, email, password, confirmPassword, phone, address, birth}) => {
        console.log(username);
        if(username && firstname && lastname && email && password && confirmPassword && phone && address && birth === null) {
            setMsg('Vui lòng điền đầy đủ thông tin.')
            return 0;
        }

        return 1;
    } 

    const handleSubmit = async(e) => {
        e.preventDefault();

        const staff = {
            username,
            firstname,
            lastname,
            email,
            password,
            confirmPassword,
            phone,
            address,
            birth,
            sex,
            roles,
        }

        const validate = Validate(staff);
        if(validate === 1) {
            await registerStaff(staff, dispatch, navigate);
        }
        navigate('/staff');
    }

    return (
        <Modal active={false} id={'modal'}>
            <ModalContent>
                <div className="staff__modal__form">
                    <div className="staff__modal__form__wrapper">
                        Thông tin nhân viên
                        <form className="staff__modal__form__wrapper__inner" >
                            <div className="staff__modal__form__wrapper__inner__info-login">
                                <div className="staff__modal__form__wrapper__inner__info-login__left">
                                    <span className="staff__modal__form__wrapper__inner__info-login__left__title">
                                        Thông tin đăng nhập
                                    </span>

                                    <input 
                                        className="staff__modal__form__wrapper__inner__info-login__left__email"
                                        placeholder="Email"
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />

                                    <input 
                                        className="staff__modal__form__wrapper__inner__info-login__left__username"
                                        placeholder="Username"
                                        type="text"
                                        onChange={(e) => setUsername(e.target.value)}
                                        value={username}
                                    />

                                    <input 
                                        className="staff__modal__form__wrapper__inner__info-login__left__password"
                                        placeholder="Mật khẩu"
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />

                                    <input 
                                        className="staff__modal__form__wrapper__inner__info-login__left__password-cf"
                                        placeholder="Nhập lại mật khẩu"
                                        type="password"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        value={confirmPassword}
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
                                            onChange={(e) => setFirstname(e.target.value)}
                                            value={firstname}
                                        />
    
                                        <input 
                                            className="staff__modal__form__wrapper__inner__info-contact__in__left__lname"
                                            placeholder="Tên"
                                            type="text"
                                            onChange={(e) => setLastname(e.target.value)}
                                            value={lastname}
                                        />
    
                                        <input 
                                            className="staff__modal__form__wrapper__inner__info-contact__in__left__phone"
                                            placeholder="Số điện thoại"
                                            type="text"
                                            onChange={(e) => setPhone(e.target.value)}
                                            value={phone}
                                        />
                                        
                                        <input 
                                            className="staff__modal__form__wrapper__inner__info-contact__in__left__address"
                                            placeholder="Địa chỉ"
                                            type="text"
                                            onChange={(e) => setAddress(e.target.value)}
                                            value={address}
                                        />
                                    </div>
    
                                    <div className="staff__modal__form__wrapper__inner__info-contact__in__right">
                                        <select id="roles" name="roles"
                                            onChange={(e) => setRoles(e.target.value)}>
                                            <option value="1">Quản lý</option>
                                            <option value="2">Nhân viên</option>
                                        </select>
                                        
                                        <select id="sexs" name="sexs" value={1}
                                            onChange={(e) => setSex(e.target.value)}>
                                            <option value="1">Nam</option>
                                            <option value="2">Nữ</option>
                                        </select>

                                        <div className="staff__modal__form__wrapper__inner__info-contact__in__right__birth">
                                            <label for="birthday">Birthday:</label>
                                            <input 
                                                type="date" id="birthday" name="birthday"
                                                onChange={(e) => setBirth(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="staff__modal__form__wrapper__inner__submit" onClick={handleSubmit}>Thêm mới</button>  
                        </form>
                    </div>
                </div>
            </ModalContent>
        </Modal>
    )
}

export default StaffCreate;