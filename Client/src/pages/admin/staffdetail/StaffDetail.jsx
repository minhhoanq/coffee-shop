import React from "react";

import './staff-detail.scss';

const StaffDetail = () => {

    return (
        <div className="staff-detail">
            Thông tin nhân viên

            <div className="staff-detail__wrapper">
                <div className="staff-detail__wrapper__left">
                    <button className="staff-detail__wrapper__left__edit">
                        <i class="ri-pencil-fill"></i>
                    </button>
                    <img className="staff-detail__wrapper__left__img" src="https://cafefcdn.com/203337114487263232/2022/3/9/photo-1-1646783225090604277749.jpg" alt="" />
                    <div className="staff-detail__wrapper__left__body">
                        <span className="staff-detail__wrapper__left__body__name">
                            Minh Hoàng
                        </span>
                        <div className="staff-detail__wrapper__left__body__roles">
                            Quản lý
                        </div>
                    </div>

                    <form className="staff-detail__wrapper__left__footer">
                            <fieldset className="staff-detail__wrapper__left__footer__fielset" id="fielset" disabled={true}>
                                <legend>name</legend>
                                <input type="text" name="name" id="name" placeholder="Your Name" />
                            </fieldset>

                            <fieldset className="staff-detail__wrapper__left__footer__fielset" id="fielset" disabled={true}>
                                <legend>Date Job</legend>
                                <input type="text" name="name" id="name" placeholder="Date Job" />
                            </fieldset>

                            <fieldset className="staff-detail__wrapper__left__footer__fielset" id="fielset" disabled={true}>
                                <legend>name</legend>
                                <input type="text" name="name" id="name" placeholder="input" />
                            </fieldset>

                            <fieldset className="staff-detail__wrapper__left__footer__fielset" id="fielset" disabled={true}>
                                <legend>name</legend>
                                <input type="text" name="name" id="name" placeholder="input" />
                            </fieldset>
                        </form>
                </div>

                <div className="staff-detail__wrapper__right" >
                    right
                </div>
            </div>
        </div>
    )
}

export default StaffDetail;