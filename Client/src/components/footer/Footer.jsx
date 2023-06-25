import React from "react";
import './footer.scss';

import  { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer__wrapper__item temp">
                    Multimart
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolor labore eveniet vitae nulla itaque soluta sit provident consectetur laboriosam?</p>
                </div>
                <div className="footer__wrapper__item">
                    Top Categories
                    <Link>Mobile Phones</Link>
                    <Link>Modern Sofa</Link>
                    <Link>Arm chair</Link>
                    <Link>Smart Watches</Link>
                </div>
                <div className="footer__wrapper__item">
                    Useful Links
                    <Link>Shop</Link>
                    <Link>Cart</Link>
                    <Link>Login</Link>
                    <Link>Privacy Policy</Link>
                </div>
                <div className="footer__wrapper__item">
                    Contact
                    <div>
                        <i class="ri-map-pin-line"></i>
                        <Link>97 Man Thiện, Quận 9, TP. Thủ Đức, TP. Hồ Chí Minh</Link>
                    </div>
                    <div>
                        <i class="ri-phone-line"></i>
                        <Link>0941151376</Link>
                    </div>
                    <div>
                        <i class="ri-mail-line"></i>
                        <Link>mh.tranminhhoang@gmail.com</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;