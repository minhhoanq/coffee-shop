import React, { useEffect, useState } from "react"

import './cart.scss';
import PageHeader from '../../components/pageheader/PageHeader';
import Button from '../../components/button/Button';

import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { cartActions } from "../../redux/slice/cartSlice";

const Cart = () => {

    const cartList = useSelector(state => state.cart.cartItems);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let sum = 0;
        cartList.map((item) => {
            sum += item.price;
        });
        setTotalPrice(sum);
    },[cartList]);

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

                    { cartList.map((item, i) => (
                        <CartItem item={item} key={i}/>
                    ))}
                </div>

                <div className="cart__wrapper__check-out">
                    <div className="cart__wrapper__check-out__price">
                        <span >Subtotal</span>
                        <span className="cart__wrapper__check-out__price__txt">${totalPrice}</span>
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

    const item = props.item;

    const dispatch = useDispatch();

    const handleDeleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id));

        toast.success('Delete product successfully');

    }

    return (
        <div className="cart-item">
            <div className="cart-item__wrapper">
                <img src={item.imgUrl} alt=""/>
                <span className="cart-item__wrapper__title">{item.productName}</span>

                <div className="cart-item__wrapper__title1">
                    <span className="cart-item__wrapper__title1__price">${item.price}</span>
                    <span className="cart-item__wrapper__title1__qty">{item.quantity}</span>
                    <i class="ri-delete-bin-5-line" onClick={handleDeleteProduct}></i>
                </div>
            </div>
        </div>
    )
}

export default Cart;