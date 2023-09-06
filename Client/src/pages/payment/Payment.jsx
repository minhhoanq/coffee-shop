import React from "react";

import './payment.scss';

const Payment = () => {
    return (
        <div className="payment">
        <div className="payment__header">
            <span className="payment__header__title">Tài khoản ngân hàng của tôi</span>

            <button className="payment__header__btn">
                <i class="ri-add-line"></i>
                Thêm tài khoản ngân hàng
            </button>
        </div>
        <div className="payment__wrapper">
            <ul className="payment__wrapper__form__w">
                <li className="payment__wrapper__form__w">
                    <div className="payment__wrapper__form__w__inner">
                        <div className="payment__wrapper__form__w__inner__list">
                            <div className="payment__wrapper__form__w__inner__list__item">
                                <div className="payment__wrapper__form__w__inner__list__item__contact">
                                    <span className="payment__wrapper__form__w__inner__list__item__contact__name">Techcombank - Ngân hàng TMCP Kỹ thương Việt Nam</span>
                                    <div className="payment__wrapper__form__w__inner__list__item__contact__check"> Đã kiểm tra</div>
                                    <span className="payment__wrapper__form__w__inner__list__item__contact__default">Mặc định</span>
                                </div>
                                <div className="payment__wrapper__form__w__inner__list__item__info">
                                    <span className="payment__wrapper__form__w__inner__list__item__info__user">
                                        Họ và tên: Nguyễn Thị My
                                    </span>
                                    <p className="payment__wrapper__form__w__inner__list__item__info__branch">
                                        Chi nhánh: Hoi so chinh/ Chi nhanh khac (Techcombank)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="payment__wrapper__form__w__inner__options">
                            <button
                                className="payment__wrapper__form__w__inner__options__delete"
                            >
                                Xóa
                            </button>

                            <button
                                className="payment__wrapper__form__w__inner__options__default"
                            >
                                Đặt làm địa chỉ mặc định
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Payment;