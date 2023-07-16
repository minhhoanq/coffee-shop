import React from "react";
import { NavLink } from 'react-router-dom';

const MenuSideBarItem = props => {
    const item = props.item;
    return (
        <NavLink 
            className={(nav) => (`menu-side-bar-item ${( {active: nav.isActive})}`)}
            // to={item.pathname}
        >
            {item.title}
        </NavLink>
    )
}

export default MenuSideBarItem;