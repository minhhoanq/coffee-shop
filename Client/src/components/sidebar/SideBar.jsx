import React from "react";

import './side-bar.scss';
import MenuSidebar from "./MenuSideBar";
import MenuSidebarItem from "./MenuSideBarItem";

const SideBar = props => {

    return (
        <div className="side-bar">
            <div className="side-bar__logo">
                <img src="https://adminjs-demo.herokuapp.com/admin/frontend/assets/logo.svg" alt="" />
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