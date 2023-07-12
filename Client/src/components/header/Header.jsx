import React, { useEffect, useRef} from "react"
import { Link, useLocation } from 'react-router-dom';

import './header.scss';
import Car_ver from "../cart_ver/Cart_ver";
import { logoutUser } from "../../redux/slice/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import createAxios from "../../createInstance";
import { logoutSuccess } from "../../redux/slice/authSlice";

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

    const headerRef = useRef(null);
    const navMobileRef = useRef(null);
    const overLayMobileRef = useRef(null);  
    const notifyListRef = useRef(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.login?.currentUser);
    let axiosJWT = createAxios(user, dispatch, logoutSuccess);
    
    const accessToken = user?.accessToken;
    const id = user?._id;

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }

        window.addEventListener('scroll', shrinkHeader);

        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    },[]);

    const toggleHandleMenuShow = () => {
        navMobileRef.current.classList.toggle('show');
        overLayMobileRef.current.classList.toggle('ovl');
    }

    const handleNotify = () => {
        notifyListRef.current.classList.toggle('notifyShow');
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
                        <div className="header__wrapper__options__notify" onClick={handleNotify}>
                            <i class="ri-heart-line" ></i>
                            <div className="header__wrapper__options__notify__dot"></div>
    
                            <div className="header__wrapper__options__notify__list" ref={notifyListRef}>
                                <div className="header__wrapper__options__notify__list__txt">Thông báo mới nhận</div>
    
                                <ul className="header__wrapper__options__notify__list__ul">
                                    <li className="header__wrapper__options__notify__list__ul__li">
                                        <Car_ver/>
                                    </li>
    
                                    <li className="header__wrapper__options__notify__list__ul__li">
                                        <Car_ver/>
                                       
                                    </li>
    
                                    <li className="header__wrapper__options__notify__list__ul__li">
                                        <Car_ver/>
                                        
                                    </li>
    
                                    <li className="header__wrapper__options__notify__list__ul__li">
                                        <Car_ver/>
                                    </li>
    
                                    <li className="header__wrapper__options__notify__list__ul__li">
                                        <Car_ver/>
                                    </li>
                                </ul>
    
                                <button className="header__wrapper__options__notify__list__btn">Xem tất cả</button>
                            </div>
                        </div>
                        <div className="header__wrapper__options__cart">
                            <i class="ri-shopping-cart-line"></i>
                        </div>
                        <div className="header__wrapper__options__profile">
                            {
                                user ? <>
                                    <span>Hi,{user.username}</span>
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