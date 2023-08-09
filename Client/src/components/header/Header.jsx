import React, { useEffect, useRef, useState} from "react"
import { Link, useLocation } from 'react-router-dom';

import './header.scss';
import Car_ver from "../cart_ver/Cart_ver";
import { logoutUser } from "../../api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import createAxios from "../../createInstance";
import { logoutSuccess } from "../../redux/slice/authSlice";
import { getToCartItem } from "../../api/productApi";

const headerNav = [
    {
        path: '/',
        display: "Home",
    },
    {
        path: '/shop',
        display: "Coffee",
    },
    {
        path: '/cart',
        display: "Cart",
    },
];

const Header = () => {
    const { pathname } = useLocation();
    const active = headerNav.findIndex(e => e.path === pathname);

    const [cart, setCart] = useState([]);

    const headerRef = useRef(null);
    const navMobileRef = useRef(null);
    const overLayMobileRef = useRef(null);  
    const notifyListRef = useRef(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.login?.currentUser);
    let axiosJWT = createAxios(user, dispatch, logoutSuccess);
    
    const accessToken = user?.generateAccessToken;
    const id = user?.others.id;

    console.log(user)
    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        };

        window.addEventListener('scroll', shrinkHeader);

        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    },[]);

    useEffect(() => {
        
        const getDataCart = async () => {
            const cartArr = await getToCartItem(accessToken);
            setCart(cartArr.productData || []);
        }
        getDataCart();
    },[]);

    const toggleHandleMenuShow = () => {
        navMobileRef.current.classList.toggle('show');
        overLayMobileRef.current.classList.toggle('ovl');
    }

    const handleCart = () => {
        notifyListRef.current.classList.toggle('cartShow');
    }

    const handleUser = (e) => {

    }

    const handleLogout =() => {
        logoutUser(dispatch, id, navigate, accessToken, axiosJWT);
    }

    return (
            <div className="header"  ref={headerRef}>
                <div className="header__wrapper wide col">
                    <Link to={'/'} className="header__wrapper__logo">
                        <i class="ri-cup-line"></i>
                        Coffee Shop
                    </Link>
    
                    <ul className="header__wrapper__nav">
                        {headerNav.map((item, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={item.path}>
                                    {item.display}
                                </Link>
                            </li>
                        ))}
                    </ul>
    
                    <div className="header__wrapper__options">
                        <div className="header__wrapper__options__notify">
                            <i class="ri-heart-line" ></i>
                        </div>
                        <div className="header__wrapper__options__cart">
                            <i class="ri-shopping-cart-line" onClick={handleCart}></i>
                            <div className="header__wrapper__options__cart__dot"></div>
    
                            <div className="header__wrapper__options__cart__list" ref={notifyListRef}>
                                <div className="header__wrapper__options__cart__list__txt">Giỏ hàng của bạn</div>
    
                                <ul className="header__wrapper__options__cart__list__ul">
                                    {cart.length !== 0 ? (cart?.map((item, i) => (
                                        <li className="header__wrapper__options__cart__list__ul__li" key={i}>
                                            <Car_ver item = {item}/>
                                        </li>
                                    ))) : <div className="header__wrapper__options__cart__list__ul__no-cart">
                                             <i class="ri-emotion-unhappy-line"></i>
                                             <span>Bạn không có sản phẩm nào trong giỏ hàng</span>
                                        </div>}
                                </ul>
    
                                <button className="header__wrapper__options__cart__list__btn">Xem tất cả</button>
                            </div>
                        </div>
                        <div className="header__wrapper__options__profile">
                            {
                                user ? <>
                                    <i class="ri-user-follow-line" onClick={handleUser}></i>
                                    <span style={{cursor: "pointer"}} onClick={handleLogout}>Logout</span>
                                </> : <i class="ri-user-smile-line"></i>
                            }
                        </div>
                    </div>
    
                    <button className="header__wrapper__mobile"  >
                        <i class="ri-menu-line" onClick={toggleHandleMenuShow}></i>
                        <div className="header__wrapper__mobile__menu" ref={navMobileRef}>
                            <i class="ri-arrow-right-circle-line" onClick={toggleHandleMenuShow}></i>
                            <ul>
                                {headerNav.map((item, i) => (
                                <li key={i} className={`${i === active ? 'active' : ''}`}>
                                    <Link to={item.path}>
                                        {item.display}
                                    </Link>
                                </li>
                                ))}
    
                                <li className="header__wrapper__mobile__menu__btn">
                                    Notifycation
                                </li>
                                <li className="header__wrapper__mobile__menu__btn">
                                    Profile
                                </li>
                            </ul>
                        </div>
                        <div className="header__wrapper__mobile__overlay" ref={overLayMobileRef}></div>
                    </button>
                </div>
            </div>
    );
}

export default Header;