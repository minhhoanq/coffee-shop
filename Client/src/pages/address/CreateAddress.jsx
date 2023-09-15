import React from "react";

import Modal, { ModalContent } from '../../components/modal/Modal';

const CreateAddress = () => {
    return (
        <Modal id={'modal'} >
            <ModalContent className={'address__header__modal'}>
                <span className="address__header__modal__title">
                    Địa chỉ mới
                </span>

                <form className="address__header__modal__wrapper">
                    <div className="address__header__modal__wrapper__options">
                        <label>Tỉnh/Thành phố</label>
                        <select name="citys" id="citys">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                    <div className="address__header__modal__wrapper__options">
                        <label>Quận/Huyện</label>
                        <select name="citys" id="citys">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                    <div className="address__header__modal__wrapper__options">
                        <label>Phường/Xã</label>
                        <select name="citys" id="citys">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                    <div className="address__header__modal__wrapper__options">
                        <label>Số nhà, tên đường</label>
                        <input className="address__header__modal__wrapper__input-address" type="text" placeholder="Số nhà, tên đường" />
                    </div>

                    <div className="address__header__modal__wrapper__default-address">
                        <input type="checkbox" />
                        <label>Đặt làm địa chỉ mặc định</label>
                    </div>

                    <div className="address__header__modal__wrapper__address-type">
                        <label htmlFor="">Loại địa chỉ:</label>

                        <div className="address__header__modal__wrapper__address-type__btn">
                            <button className="address__header__modal__wrapper__address-type__btn__home">Nhà riêng</button>
                            <button className="address__header__modal__wrapper__address-type__btn__office">Văn phòng</button>
                        </div>
                    </div>

                    <div className="address__header__modal__wrapper__choose">
                        <button className="address__header__modal__wrapper__choose__cancel">Trở lại</button>
                        <button className="address__header__modal__wrapper__choose__submit">Xác nhận</button>
                    </div>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default CreateAddress;