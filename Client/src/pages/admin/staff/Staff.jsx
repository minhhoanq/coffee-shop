import React, { useEffect, useState } from "react";

import './staff.scss';
import PersonCard from "../../../components/personcard/PersonCard";
import { getAllStaff } from "../../../redux/slice/apiRequest";
import Modal, { ModalContent } from "../../../components/modal/Modal";

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

    return (
        <Modal active={false} id={'modal'}>
            <ModalContent>
                <div className="staff__modal__form">
                    <div className="staff__modal__form__wrapper">
                        Thông tin nhân viên
                        <form className="staff__modal__form__wrapper__inner">
                            <div className="staff__modal__form__wrapper__inner__info-login">
                                <div className="staff__modal__form__wrapper__inner__info-login__left">
                                    <span className="staff__modal__form__wrapper__inner__info-login__left__title">
                                        Thông tin đăng nhập
                                    </span>

                                    <input 
                                        className="staff__modal__form__wrapper__inner__info-login__left__email"
                                        placeholder="Email"
                                        type="email"
                                    />

                                    <input 
                                        className="staff__modal__form__wrapper__inner__info-login__left__username"
                                        placeholder="Username"
                                        type="text"
                                    />

                                    <input 
                                        className="staff__modal__form__wrapper__inner__info-login__left__password"
                                        placeholder="Mật khẩu"
                                        type="password"
                                    />

                                    <input 
                                        className="staff__modal__form__wrapper__inner__info-login__left__password-cf"
                                        placeholder="Nhập lại mật khẩu"
                                        type="password"
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
                                        />
    
                                        <input 
                                            className="staff__modal__form__wrapper__inner__info-contact__in__left__lname"
                                            placeholder="Tên"
                                            type="text"
                                        />
    
                                        <input 
                                            className="staff__modal__form__wrapper__inner__info-contact__in__left__phone"
                                            placeholder="Số điện thoại"
                                            type="text"
                                        />
                                        
                                        <input 
                                            className="staff__modal__form__wrapper__inner__info-contact__in__left__address"
                                            placeholder="Địa chỉ"
                                            type="text"
                                        />
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
                                            <input type="date" id="birthday" name="birthday"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                    
                        </form>
                    </div>
                </div>
            </ModalContent>
        </Modal>
    )
}

export default Staff;