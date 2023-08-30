import React from "react";

//import './defaultlayoutAdmin.scss';
import SideBar from "../../sidebar/SideBar";
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
} from "../../icon/Icons";

const DefaultLayoutUser = props => {
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
    return (
        <div style={{display: "flex"}}>
            <SideBar options={MORE_ITEMS} />
            <div style={{maxWidth: "80%", width: "80%", marginLeft: "20%"}}>{props.children}</div>
        </div>
    )
}

export default DefaultLayoutUser;