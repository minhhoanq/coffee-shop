import React from "react";
import { NavLink } from 'react-router-dom';

const MenuSideBarItem = props => {
    const item = props.item;
    return (
        <NavLink 
            className={(`menu-side-bar-item`)}
            to={item.pathname}
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
    )
}

export default MenuSideBarItem;