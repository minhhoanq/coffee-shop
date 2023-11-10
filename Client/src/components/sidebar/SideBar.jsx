import React from "react";

import './side-bar.scss';
import MenuSidebar from "./MenuSideBar";
import MenuSidebarItem from "./MenuSideBarItem";
import logo from "../../assets/images/logo.jpg"

const SideBar = props => {

    return (
        <div className="side-bar">
            <div className="side-bar__logo">
                <img src={logo} alt="avatar" />
            </div>
            <MenuSidebar>
                { props.options.map((item, i) => (
                    <MenuSidebarItem item={item} key={i}/>
                ))}
            </MenuSidebar>
        </div>
    )
}

export default SideBar;