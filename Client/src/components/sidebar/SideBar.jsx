import React from "react";

import './side-bar.scss';
import MenuSidebar from "./MenuSideBar";
import MenuSidebarItem from "./MenuSideBarItem";

const MORE_ITEMS = [
    {
        icon: "",
        title: "Trang chủ",
        pathname: "/admin",
    },
    {
        icon: "",
        title: "Nhân viên",
        pathname: "/staff",
    },
    {
        icon: "",
        title: "Khách hàng",
        pathname: "/customer",
    },
    {
        icon: "",
        title: "Nguyên liệu",
        pathname: "/ingredient",
    },
    {
        icon: "",
        title: "Đơn đặt hàng",
        pathname: "/order",
    },
    {
        icon: "",
        title: "Đơn nhập hàng",
        pathname: "import-orders",
    },
    {
        icon: "",
        title: "Quản lý ...",
        pathname: "/#",
    },
    {
        icon: "",
        title: "Quản lý ...",
        pathname: "/#",
    }
]

const SideBar = () => {

    return (
        <div className="side-bar">
            <MenuSidebar>
                { MORE_ITEMS.map((item, i) => (
                    <MenuSidebarItem item={item} key={i}/>
                ))}
            </MenuSidebar>
        </div>
    )
}

export default SideBar;