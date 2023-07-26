import React from "react";

import './person-card.scss';
import { useNavigate } from 'react-router-dom';
import { softDeleteUserById } from '../../redux/slice/apiRequest';
import Modal, { ModalContent } from "../modal/Modal";
import { toast } from "react-toastify";

const PersonCard = props => {

    const item = props.item;
    const id  = item.id;
    const navigate = useNavigate();

    const toggleModal = () => {
        const modal = document.querySelector('#modal-delete');
        modal.classList.toggle('active');
    }

    const handleDeleteUser = async(e) => {
        e.preventDefault();
        toggleModal();
        console.log(item.id);
    }

    const handleModalCancel = (e) => {
        e.preventDefault();
        toggleModal();
    }

    const handleModalOK = async(e) => {
        e.preventDefault();
        const res = await softDeleteUserById(item.id);
        const status = res.data;
        if(status.err === 0) {
            toast.success(status.mes);
            toggleModal();
            setTimeout(() => {
                window.location.reload(false);
            }, 2000)
            return;
        } else {
            toast.error(status.mes);
            toggleModal();
            return;
        }
    }
    return (
        <div className="person-card">
            <div className="person-card__wrapper">
                <a href={`/admin/staff/${item.id}`} className="person-card__wrapper__inner">
                    <div className="person-card__wrapper__inner__up">
                        <img 
                            className="person-card__wrapper__inner__up__img"
                            src="https://thuthuatnhanh.com/wp-content/uploads/2019/02/anh-dai-dien-dep-cho-zalo.jpeg" 
                            alt="" />   
                        <div className="person-card__wrapper__inner__up__name">
                            <span className="person-card__wrapper__inner__up__name__txt">{item.username}</span>
                            <div className="person-card__wrapper__inner__up__name__dot"></div>
                        </div>
                        <span className="person-card__wrapper__inner__up__position">Senior HR Manager</span>
                    </div>
                    <div className="person-card__wrapper__inner__down">
                        <span className="person-card__wrapper__inner__down__sex">{item.sex}</span>
                        <span className="person-card__wrapper__inner__down__email">{item.email}</span>
                        <span className="person-card__wrapper__inner__address">{item.address}</span>
                    </div>

                </a>
                <button className="person-card__wrapper__delete-user" onClick={handleDeleteUser}>
                    <i class="ri-user-unfollow-line"></i>
                </button>

                <Modal active={false} id={'modal-delete'}>
                    <ModalContent className="person-card__wrapper__modal">
                        {/* <div className="person-card__wrapper__modal__inner"> */}
                            <div className="person-card__wrapper__modal__header">
                                Xóa nhân viên
                            </div>

                            <div className="person-card__wrapper__modal__body">
                                Bạn có chắc chắn muốn xóa nhân viên này không ?
                            </div>

                            <div className="person-card__wrapper__modal__footer">
                                <button className="person-card__wrapper__modal__footer__cancel" onClick={handleModalCancel}>
                                    Hủy
                                </button>

                                <button className="person-card__wrapper__modal__footer__ok" onClick={handleModalOK}>
                                    Đồng ý
                                </button>
                            </div>
                        {/* </div> */}
                    </ModalContent>
                </Modal>
            </div>
        </div>
    )
}

export default PersonCard;