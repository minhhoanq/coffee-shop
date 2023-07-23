import React from "react";

import './staff-trash.scss';
import UserCardHorizontal from "../../../components/usercardhorizontal/UserCardHorizontal";

const StaffTrash = () => {

    return (
        <div className="staff-trash">
            Thùng rác

            <div className="staff-trash__wrapper">
                <div className="staff-trash__wrapper__header">
                    <div className="staff-trash__wrapper__header__checkbox">
                        <input type="checkbox" />
                        <span> Chọn tất cả</span>
                    </div>

                    <button className="staff-trash__wrapper__header__btn-delete-forever">
                        <i class="ri-delete-bin-5-line"></i>
                        Xóa vĩnh viễn
                    </button>

                    <button className="staff-trash__wrapper__header__btn-undo">
                        <i class="ri-loop-left-line"></i>
                        Khôi phục
                    </button>

                    <div className="staff-trash__wrapper__header__search">
                        <input className="staff-trash__wrapper__header__search__input" type="text" placeholder="Nhân viên cần tìm ?"/>
                        <i class="ri-search-line"></i>
                    </div>
                </div>

                <div className="staff-trash__wrapper__footer">
                    <div className="staff-trash__wrapper__footer__inner">
                        <input className="staff-trash__wrapper__footer__inner__checkbox" type="checkbox" />

                        <UserCardHorizontal/>
                    </div>

                    <div className="staff-trash__wrapper__footer__inner">
                        <input className="staff-trash__wrapper__footer__inner__checkbox" type="checkbox" />

                        <UserCardHorizontal/>
                    </div>

                    <div className="staff-trash__wrapper__footer__inner">
                        <input className="staff-trash__wrapper__footer__inner__checkbox" type="checkbox" />

                        <UserCardHorizontal/>
                    </div>

                    <div className="staff-trash__wrapper__footer__inner">
                        <input className="staff-trash__wrapper__footer__inner__checkbox" type="checkbox" />

                        <UserCardHorizontal/>
                    </div>

                    <div className="staff-trash__wrapper__footer__inner">
                        <input className="staff-trash__wrapper__footer__inner__checkbox" type="checkbox" />

                        <UserCardHorizontal/>
                    </div>

                    <div className="staff-trash__wrapper__footer__inner">
                        <input className="staff-trash__wrapper__footer__inner__checkbox" type="checkbox" />

                        <UserCardHorizontal/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaffTrash;