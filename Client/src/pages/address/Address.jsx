import React, { useEffect, useState } from "react";

import './address.scss';
import * as userApi from '../../api/userApi';

const Address = () => {
    const [address, setAddress] = useState();

    useEffect(() => {
        const getUserAddressList = async() => {
            const userAddressList = await userApi.getUserAddressList();
            setAddress(userAddressList.data)
        }

        getUserAddressList();
    }, [])

    console.log(address);

    return (
        <div className="address">
            <div className="address__header">
                <span className="address__header__title">Địa chỉ của tôi</span>

                <button className="address__header__btn">
                    <i class="ri-add-line"></i>
                    Thêm địa chỉ mới
                </button>
            </div>
            <div className="address__wrapper">
                <span className="address__wrapper__text">
                    Địa chỉ
                </span>

                { address ? <>
                    {
                        address.map((item, i) => (
                            <ul className="address__wrapper__form__w">
                    <li className="address__wrapper__form__w">
                        <div className="address__wrapper__form__w__inner">
                            <div className="address__wrapper__form__w__inner__list">
                                <div className="address__wrapper__form__w__inner__list__item">
                                    <div className="address__wrapper__form__w__inner__list__item__contact">
                                        <span className="address__wrapper__form__w__inner__list__item__contact__name">Tran Minh Hoang</span>
                                        <div className="address__wrapper__form__w__inner__list__item__contact__bulkhead"></div>
                                        <span className="address__wrapper__form__w__inner__list__item__contact__phone">(+84) 941151376</span>
                                    </div>
                                    <div className="address__wrapper__form__w__inner__list__item__address">
                                        <span className="address__wrapper__form__w__inner__list__item__address__street">
                                            {item.address}
                                        </span>
                                        <p className="address__wrapper__form__w__inner__list__item__address__more">
                                            {item.district}, {item.city_province}, {item.city}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="address__wrapper__form__w__inner__options">
                                <div className="address__wrapper__form__w__inner__options__update-delete">
                                    <button 
                                        className="address__wrapper__form__w__inner__options__update-delete__update"
                                    >
                                        Cập nhật
                                    </button>
                                    <button
                                        className="address__wrapper__form__w__inner__options__update-delete__delete"
                                    >
                                        Xóa
                                    </button>
                                </div>

                                <button
                                    className="address__wrapper__form__w__inner__options__default"
                                >
                                    Đặt làm địa chỉ mặc định
                                </button>
                            </div>
                        </div>

                        <div className="address__wrapper__form__w__status">Mặc định</div>
                    </li>
                </ul>
                        ))
                    }
                </> : 
                
                <>
                <span className="address__wrapper__no-linked">
                    <i class="ri-map-pin-line"></i>
                    Hãy cho chúng tôi biết địa chỉ cá nhân, công ty, ... của bạn.
                {/* <span className="address__wrapper__no-linked__tips">
                    Hãy thêm tài khoản ngân hàng để tiện lợi hơn trong việc mua hàng bạn nhé.
                </span> */}
                </span>
                </>}

                

                
            </div>
        </div>
    )
}

export default Address;