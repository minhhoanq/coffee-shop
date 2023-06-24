import React from "react"

import './cart.scss';
import PageHeader from '../../components/pageheader/PageHeader';
import Button from '../../components/button/Button';
import temp from '../../assets/images/arm-chair-01.jpg';

const Cart = () => {
    return (
        <div className="cart">
            <PageHeader title={"Cart"} />

            <div className="cart__wrapper">
                <div className="cart__wrapper__table">
                    <div className="cart__wrapper__table__title">
                            <span className="cart__wrapper__table__title__img">Image</span>
                            <span className="cart__wrapper__table__title__name">Title</span>

                            <div className="cart__wrapper__table__title__title1">
                                <span className="cart__wrapper__table__title__title1__price">Price</span>
                                <span className="cart__wrapper__table__title__title1__qty">Qty</span>
                                <span className="cart__wrapper__table__title__title1__delete">Delete</span>
                            </div>
                    </div>

                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>

                <div className="cart__wrapper__check-out">
                    <div className="cart__wrapper__check-out__price">
                        <span >Subtotal</span>
                        <span className="cart__wrapper__check-out__price__txt">$557</span>
                    </div>

                    <p className="cart__wrapper__check-out__text">
                        taxes and shipping will  caculate in checkout
                    </p>

                    <Button className="cart__wrapper__check-out__btn">Checkout</Button>

                    <Button className="cart__wrapper__check-out__btn">Continue Shopping</Button>
                </div>
            </div>
        </div>
    )
}

export const CartItem = props => {

    return (
        <div className="cart-item">
            <div className="cart-item__wrapper">
                    <img src={temp} alt=""/>
                    <span className="cart-item__wrapper__title">Sakarias Armchair</span>

                    <div className="cart-item__wrapper__title1">
                        <span className="cart-item__wrapper__title1__price">$99</span>
                        <span className="cart-item__wrapper__title1__qty">2</span>
                        <i class="ri-delete-bin-5-line"></i>
                    </div>
                </div>
            </div>
    )
}

export default Cart;