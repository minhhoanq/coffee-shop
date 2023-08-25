import React from "react";

import './side-bar.scss';
import MenuSidebar from "./MenuSideBar";
import MenuSidebarItem from "./MenuSideBarItem";
import { 
    CustomerIcon,
    CustomerIconActive,
    HomeIcon, 
    HomeIconActive, 
    ImportOrderIcon, 
    IngredientIcon, 
    IngredientIconActive, 
    OrderIcon, 
    OrderIconActive, 
    StaffIcon, 
    StaffIconActive 
} from "../icon/Icons";

const MORE_ITEMS = [
    {
        icon: <HomeIcon/>,
        iconActive: <HomeIconActive/>,
        title: "Trang chủ",
        pathname: "/admin/home",
    },
    {
        icon: <StaffIcon/>,
        iconActive: <StaffIconActive/>,
        title: "Nhân viên",
        pathname: "/admin/staff",
    },
    {
        icon: <CustomerIcon/>,
        iconActive: <CustomerIconActive/>,
        title: "Khách hàng",
        pathname: "/admin/customer",
    },
    {
        icon: <IngredientIcon/>,
        iconActive: <IngredientIconActive/>,
        title: "Nguyên liệu",
        pathname: "/admin/ingredient",
    },
    {
        icon: <OrderIcon/>,
        iconActive: <OrderIconActive/>,
        title: "Đơn đặt hàng",
        pathname: "/admin/order",
    },
    {
        icon: <ImportOrderIcon/>,
        iconActive: <ImportOrderIcon/>,
        title: "Đơn nhập hàng",
        pathname: "/admin/import-orders",
    },
    {
        icon: <HomeIcon/>,
        iconActive: <HomeIconActive/>,
        title: "Quản lý ...",
        pathname: "/#",
    },
    {
        icon: <HomeIcon/>,
        iconActive: <HomeIconActive/>,
        title: "Quản lý ...",
        pathname: "/#",
    }
]

const SideBar = () => {

    return (
        <div className="side-bar">
            <div className="side-bar__logo">
                <img src="https://adminjs-demo.herokuapp.com/admin/frontend/assets/logo.svg" alt="" />
            </div>
            <MenuSidebar>
                { MORE_ITEMS.map((item, i) => (
                    <MenuSidebarItem item={item} key={i}/>
                ))}
            </MenuSidebar>
        </div>
    )
}

export default SideBar;