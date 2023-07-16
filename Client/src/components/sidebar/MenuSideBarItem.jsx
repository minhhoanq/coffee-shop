import React from "react";
import { NavLink } from 'react-router-dom';

const MenuSideBarItem = props => {
    const item = props.item;
    return (
        <NavLink 
            className={(`menu-side-bar-item`)}
            to={item.pathname}
        >
            {item.title}
        </NavLink>
    )
}

export default MenuSideBarItem;