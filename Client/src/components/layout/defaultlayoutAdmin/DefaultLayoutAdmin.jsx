import React from "react";

//import './defaultlayoutAdmin.scss';
import SideBar from "../../sidebar/SideBar";

const DefaultLayoutAdmin = props => {

    return (
        <div style={{display: "flex"}}>
            <SideBar />
            <div style={{maxWidth: "80%"}}>{props.children}</div>
        </div>
    )
}

export default DefaultLayoutAdmin;