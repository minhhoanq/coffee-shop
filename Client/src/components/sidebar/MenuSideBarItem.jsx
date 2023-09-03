import React, { useRef, useState } from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';

const MenuSideBarItem = props => {
    const item = props.item;
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(true);

    const dropMenu = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);

    }

    return (
        <div style={{width: '100%'}}>
            <NavLink 
                className={`menu-side-bar-item`}
                to={item.path}
                id="dropmenu"
                onClick={dropMenu}
            >   
                <span className="menu-side-bar-item__icon">
                    {item.icon}
                </span>
    
                <span className="menu-side-bar-item__icon-active">
                    {item.iconActive}
                </span>
    
                <span className="menu-side-bar-item__title">
                    {item.title}
                </span>
            </NavLink>

            {
                isOpen && 
                <div 
                    // ref={menuItemRef}
                    className={`menu-side-bar-item__list`}
                    >
                    {
                        item.children && item?.children.data.map((item, i) => {
                            return (
                                <Link 
                                    key={i}
                                    className={`menu-side-bar-item__list__item ${item.path === pathname ? 'active' : ''}`}
                                    to={item.path}
                                >
                                    {item.title}
                                </Link>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default MenuSideBarItem;