import React, { useEffect, useRef} from "react"
import { Link, useNavigate, useLocation } from 'react-router-dom';

import './header.scss';

const headerNav = [
    {
        path: '/',
        display: "Home",
    },
    {
        path: '/shop',
        display: "Shop",
    },
    {
        path: '/cart',
        display: "Cart",
    },
];

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const active = headerNav.findIndex(e => e.path === pathname);

    const headerRef = useRef(null);
    const navMobileRef = useRef(null);
    const overLayMobileRef = useRef(null);

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


    return (
        <div className="header" ref={headerRef}>
            <div className="header__wrapper container">
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
                    <div className="header__wrapper__nav_options_notify">
                        <i class="ri-heart-line"></i>
                    </div>
                    <div className="header__wrapper__nav_options_cart">
                        <i class="ri-shopping-cart-line"></i>
                    </div>
                    <div className="header__wrapper__nav_options_profile">
                        <i class="ri-user-smile-line"></i>
                    </div>
                </div>

                <button className="header__wrapper__mobile" onClick={toggleHandleMenuShow} >
                    <i class="ri-menu-line"></i>
                    <div className="header__wrapper__mobile__menu" ref={navMobileRef}>
                        <ul >
                            {headerNav.map((item, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={item.path}>
                                    {item.display}
                                </Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="header__wrapper__mobile__overlay" ref={overLayMobileRef}></div>
                </button>
            </div>
            
        </div>
    );
}

export default Header;