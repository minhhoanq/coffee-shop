import React from "react";

const MenuSidebar = ({ children }) => {
    return (
        <nav className={'menu-side-bar'}>
            {children}
        </nav>
    );
}

export default MenuSidebar