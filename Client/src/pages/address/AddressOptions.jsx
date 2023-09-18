import React from "react";

import './address.scss'
import { setDefaultAddress } from "../../api/userApi";

const AddressOptions = props => {
    const item = props.item;

    return (
        <div className="address__wrapper__form__w__inner__options">
            <div className="address__wrapper__form__w__inner__options__update-delete">
                <button 
                    className="address__wrapper__form__w__inner__options__update-delete__update"
                >
                    Cập nhật
                </button>
                {
                    !item.is_delivery_address && (
                        <button
                            className="address__wrapper__form__w__inner__options__update-delete__delete"
                        >
                            Xóa
                        </button>
                    )
                }
            </div>

            <AddressSetDefault item={item}/>    
        </div>
    )
}

export const AddressSetDefault = props => {
    const item = props.item;

    const handleSetDefault = async(e) => {
        e.preventDefault();
        const data = {
            id: item.id
        }
        const response = await setDefaultAddress(data);
        console.log(response);
    }

    return (
        <button
            className="address__wrapper__form__w__inner__options__default"
            onClick={handleSetDefault}
        >
            Đặt làm địa chỉ mặc định
        </button>
    )
}

export default AddressOptions;