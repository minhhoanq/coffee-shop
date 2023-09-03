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
            title: "Tài khoản của tôi",
            pathname: "/account/",
            children: {
                data: [
                    {
                        title: 'Hồ sơ',
                        pathname: '/account/profile'
                    },
                    {
                        title: 'Ngân hàng',
                        pathname: '/account/bank'
                    },
                    {
                        title: 'Địa chỉ',
                        pathname: '/account/address'
                    },
                    {
                        title: 'Đổi mật khẩu',
                        pathname: '/account/password'
                    },
                    {
                        title: 'Cài đặt thông báo',
                        pathname: '/account/notifications'
                    }
                ]
            }
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
    ]
    return (
        <div style={{display: "flex"}}>
            <SideBar options={MORE_ITEMS} />
            <div style={{maxWidth: "80%", width: "80%", marginLeft: "20%"}}>{props.children}</div>
        </div>
    )
}

export default DefaultLayoutUser;