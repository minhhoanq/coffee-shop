import React from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';

const MenuSideBarItem = props => {
    const item = props.item;
    const { pathname } = useLocation();

    console.log(pathname)

    return (
        <div style={{width: '100%'}}>
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

            {
                
                item.children && item?.children.data.map((item, i) => {
                
                    return (
                        <NavLink 
                            className="menu-side-bar-item__list" key={i}>
                            <Link 
                                className={`menu-side-bar-item__list__item ${item.pathname === pathname ? 'active' : ''}`} 
                                to={item.pathname}
                            >
                                {item.title}
                            </Link>
                        </NavLink>
                    )
                })
            }
        </div>
    )
}

export default MenuSideBarItem;