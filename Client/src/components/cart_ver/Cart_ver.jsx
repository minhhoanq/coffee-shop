import React from "react";

import "./cart_ver.scss";

const Car_ver = props => {
    const item = props.item;
    return (
        <div className="cart__ver">
            <img src={`${item.productSizeData.productData.productImg}`} alt=""/>
            <div className="cart__ver__info">
                <span>{item.productSizeData.productData.productName}</span>
                <p>Size: {item.productSizeData.sizeData.sizeName}</p>
                <p>{item.productSizeData.productData.productDescription}</p>
            </div>

            <div className="cart__ver__total">
                <div className="cart__ver__total__price">
                    <span>
                        {item.price}.000đ
                    </span>
                    <p>{`(${item.quantity} x ${item.productSizeData.productData.price}.000đ)`}</p>
                </div>

                <button className="cart__ver__total__btn">
                    Xoá
                </button>
            </div>
        </div>
    )
}

export default Car_ver;