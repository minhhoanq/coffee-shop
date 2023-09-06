import React, { useEffect, useRef, useState} from "react"
import { Link, useLocation } from 'react-router-dom';

import './header.scss';
import Car_ver from "../cart_ver/Cart_ver";
import { logoutUser } from "../../api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getToCartItem } from "../../api/productApi";
import { deleteAllCartItem } from "../../api/cartItemApi";
import { loginActions, logoutActions } from "../../redux/asyncActions/authActions";
import Menu from "../menu/Menu";

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

const options = [
    {
        icon: "ri-account-circle-line",
        title: 'Tài khoản cá nhân',
        path: '/user/account/profile',
    },

    {
        icon: 'ri-file-list-2-line',
        title: 'Đơn mua',
        path:'',
    },

    {
        icon: 'ri-earth-fill',
        title: 'Ngôn ngữ',
        path:'',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    title: 'Tiếng Việt',
                    code: 'vi',
                },
                {
                    type: 'language',
                    title: 'Tiếng Anh',
                    code: 'en',
                },
            ]
        }
    },

    {
        icon: 'ri-logout-circle-line',
        title: 'Đăng xuất'
    }
]

const Header = () => {
    const { pathname } = useLocation();
    const active = headerNav.findIndex(e => e.path === pathname);

    const [cart, setCart] = useState([]);

    const headerRef = useRef(null);
    const navMobileRef = useRef(null);
    const notifyRef = useRef(null);
    const overLayMobileRef = useRef(null);  
    const notifyListRef = useRef(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth?.currentUser);
    // let axiosJWT = createAxios(user, dispatch, logoutSuccess);
    const isFetching = useSelector(state => state.auth?.isFetching)
    console.log(isFetching)
    
    const accessToken = user?.token;
    const id = user?.dataUser.id;

    const HandleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'logout':
                
                break;

            default:
                break;
        }
    };

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
            setCart(cartArr?.productData || []);
        }
        getDataCart();
    },[]);

    const toggleHandleMenuShow = () => {
        navMobileRef.current.classList.toggle('show');
        overLayMobileRef.current.classList.toggle('ovl');
        console.log('show')
    }

    const toggleHandleNotifyShow = () => {
        notifyRef.current.classList.toggle('show');
        console.log('show')
    }

    const handleCart = () => {
        notifyListRef.current.classList.toggle('cartShow');
    }

    const handleDeleteAllCartItem = async(e) => {
        e.preventDefault();

        const res = await deleteAllCartItem(accessToken);
        console.log(res);
    }

    const handleLogout = async() => {
        console.log('id: ' + id);
        console.log('token: ' + accessToken);
        const valuesLogout = {id, accessToken}
        const result = await dispatch(logoutActions(valuesLogout));
        navigate('/login')
        console.log(result)
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
                            <i class="ri-heart-line" onClick={toggleHandleNotifyShow}></i>

                            <div className="header__wrapper__options__notify__wrapper" ref={notifyRef}>
                                <i class="ri-close-line header__wrapper__options__notify__wrapper__close" onClick={toggleHandleNotifyShow}></i>

                                <span>Thông báo của bạn</span>
                                <ul className="header__wrapper__options__notify__wrapper__list">
                                    <li >
                                       <ul>
                                            This Week

                                            <li>
                                                Row
                                            </li>

                                            <li>
                                                Row
                                            </li>

                                            <li>
                                                Row
                                            </li>
                                       </ul>
                                    </li>

                                    <li>
                                        <ul>
                                            This Week

                                            <li>
                                                Row
                                            </li>

                                            <li>
                                                Row
                                            </li>

                                            <li>
                                                Row
                                            </li>

                                            <li>
                                                Row
                                            </li>

                                            <li>
                                                Row
                                            </li>

                                            <li>
                                                Row
                                            </li>
                                       </ul>
                                    </li>

                                    <li>
                                        <ul>
                                            This Week

                                            <li>
                                                Row
                                            </li>

                                            <li>
                                                Row
                                            </li>

                                            <li>
                                                Row
                                            </li>

                                            <li>
                                                Row
                                            </li>

                                            <li>
                                                Row
                                            </li>

                                            <li>
                                                Row
                                            </li>
                                       </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header__wrapper__options__cart">
                            <i class="ri-shopping-cart-line" onClick={handleCart}></i>
                            <div className="header__wrapper__options__cart__dot">

                            </div>
    
                            <div className="header__wrapper__options__cart__list" ref={notifyListRef}>
                                <div className="header__wrapper__options__cart__list__txt">
                                    Giỏ hàng của bạn

                                    <button className="header__wrapper__options__cart__list__txt__delete-all" onClick={handleDeleteAllCartItem}>
                                        Xóa tất cả
                                    </button>
                                </div>
    
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
    
                                <button className="header__wrapper__options__cart__list__btn">
                                    <a href="/cart">Xem tất cả</a>
                                </button>
                            </div>
                        </div>
                            <div className="header__wrapper__options__profile">
                                <Menu items={options} onChange={HandleMenuChange}>
                                    {
                                        <div className="header__wrapper__options__profile__wrapper">
                                            {
                                                user?.others?.image ? 
                                                <>
                                                    <img 
                                                        className="header__wrapper__options__profile__wrapper__avatar" 
                                                        src={user.others.image} 
                                                        alt="avatar" />
                                                </> :
                                                <> <i class="ri-user-follow-line"> </i> </>
                                            }
                                        </div>
                                    }
                                </Menu>
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