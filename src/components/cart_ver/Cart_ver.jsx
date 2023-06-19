import React from "react";

import "./cart_ver.scss";

const Car_ver = props => {
    return (
        <div className="cart__ver">
            <img src="https://phunuhiendai.vn/wp-content/uploads/2020/12/Box-Girl-1.jpg" alt=""/>
            <div className="cart__ver__info">
                <span>Tên sản phẩm</span>
                <p>Mô tả sản phẩm, Mô tả sản phẩm Mô tả sản phẩm Mô tả sản phẩm Mô tả sản phẩm</p>
            </div>

            <div className="cart__ver__total">
                <div className="cart__ver__total__price">
                    <span>
                        2.000.000đ 
                    </span>
                    <p>x 2</p>
                </div>

                <button className="cart__ver__total__btn">
                    Xoá
                </button>
            </div>
        </div>
    )
}

export default Car_ver;