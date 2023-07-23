import React, { useState } from "react";

import './user-card-horizontal.scss';

const UserCardHorizontal = () => {

    const [dropInfo, setDropInfo] = useState(false);

    return (
        <div className="user-card-horizontal">
            <div className="user-card-horizontal__wrapper">
                <div className="user-card-horizontal__wrapper__info">
                    <img className="user-card-horizontal__wrapper__info__img" src="https://cafefcdn.com/203337114487263232/2022/3/9/photo-1-1646783225090604277749.jpg" alt=""/>
                    <div className="user-card-horizontal__wrapper__info__inner">
                        <span className="user-card-horizontal__wrapper__info__inner__name">Vox Ngoc Tran</span>
                        <span className="user-card-horizontal__wrapper__info__inner__role">Nhân viên</span>
                    </div>
                </div>
                <span className="user-card-horizontal__wrapper__date-delete">Ngày xóa: 18-07-2023</span>

                <button className="user-card-horizontal__wrapper__btn-drop">
                    <i class="ri-arrow-drop-down-line" onClick={() => (setDropInfo(!dropInfo))}></i>
                </button>
            </div>

            <div className={`user-card-horizontal__drop ${dropInfo ? 'active' : ''}`}>
                <div className="user-card-horizontal__drop__personal">
                    Thông tin cá nhân

                    <div className="user-card-horizontal__drop__personal__username">
                        <label htmlFor="">Username: </label>
                        <span>Minhhoang</span>
                    </div>

                    <div className="user-card-horizontal__drop__personal__birth">
                        <label htmlFor="">Ngày sinh: </label>
                        <span>12-09-2002</span>
                    </div>

                    <div className="user-card-horizontal__drop__personal__sex">
                        <label htmlFor="">Giới tính: </label>
                        <span>Nam</span>
                    </div>
                </div>

                <div className="user-card-horizontal__drop__contact">
                    Thông tin liên hệ

                    <div className="user-card-horizontal__drop__contact__username">
                        <label htmlFor="">Số điện thoại: </label>
                        <span>0941151376</span>
                    </div>

                    <div className="user-card-horizontal__drop__contact__birth">
                        <label htmlFor="">Email: </label>
                        <span>mh.tranminhhoang@gmail.com</span>
                    </div>

                    <div className="user-card-horizontal__drop__contact__address">
                        <label htmlFor="">Địa chỉ: </label>
                        <span>Quan 9</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCardHorizontal;