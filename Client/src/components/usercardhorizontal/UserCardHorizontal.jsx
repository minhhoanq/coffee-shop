import React, { useState } from "react";

import './user-card-horizontal.scss';

const UserCardHorizontal = props => {

    const [dropInfo, setDropInfo] = useState(false);
    const item = props.item;

    return (
        <div className="user-card-horizontal">
            <div className="user-card-horizontal__wrapper">
                <div className="user-card-horizontal__wrapper__info">
                    <img className="user-card-horizontal__wrapper__info__img" src="https://cafefcdn.com/203337114487263232/2022/3/9/photo-1-1646783225090604277749.jpg" alt=""/>
                    <div className="user-card-horizontal__wrapper__info__inner">
                        <span className="user-card-horizontal__wrapper__info__inner__name">{item.lastname}</span>
                        <span className="user-card-horizontal__wrapper__info__inner__role">Nhân viên</span>
                    </div>
                </div>
                <span className="user-card-horizontal__wrapper__date-delete">Ngày xóa: {item.deletedAt}</span>

                <button className="user-card-horizontal__wrapper__btn-drop">
                    <i class="ri-arrow-drop-down-line" onClick={() => (setDropInfo(!dropInfo))}></i>
                </button>
            </div>

            <div className={`user-card-horizontal__drop ${dropInfo ? 'active' : ''}`}>
                <div className="user-card-horizontal__drop__personal">
                    Thông tin cá nhân

                    <div className="user-card-horizontal__drop__personal__username">
                        <label htmlFor="">Username: </label>
                        <span>{item.username}</span>
                    </div>

                    <div className="user-card-horizontal__drop__personal__birth">
                        <label htmlFor="">Ngày sinh: </label>
                        <span>{item.birth}</span>
                    </div>

                    <div className="user-card-horizontal__drop__personal__sex">
                        <label htmlFor="">Giới tính: </label>
                        <span>{item.sex}</span>
                    </div>
                </div>

                <div className="user-card-horizontal__drop__contact">
                    Thông tin liên hệ

                    <div className="user-card-horizontal__drop__contact__username">
                        <label htmlFor="">Số điện thoại: </label>
                        <span>{item.phone}</span>
                    </div>

                    <div className="user-card-horizontal__drop__contact__birth">
                        <label htmlFor="">Email: </label>
                        <span>{item.email}</span>
                    </div>

                    <div className="user-card-horizontal__drop__contact__address">
                        <label htmlFor="">Địa chỉ: </label>
                        <span>{item.address}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCardHorizontal;