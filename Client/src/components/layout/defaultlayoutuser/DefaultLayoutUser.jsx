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
            path: "/user/account",
            children: {
                data: [
                    {
                        title: 'Hồ sơ',
                        path: '/user/account/profile'
                    },
                    {
                        title: 'Ngân hàng',
                        path: '/user/account/payment'
                    },
                    {
                        title: 'Địa chỉ',
                        path: '/user/account/address'
                    },
                    {
                        title: 'Đổi mật khẩu',
                        path: '/user/account/password'
                    },
                    {
                        title: 'Cài đặt thông báo',
                        path: '/user/account/notification'
                    }
                ]
            }
        },
        {
            icon: <StaffIcon/>,
            iconActive: <StaffIconActive/>,
            title: "Nhân viên",
            path: "/user/abc/xyz",
            children: {
                data: [
                    {
                        title: 'Hồ sơ',
                        path: '/user/account/profile'
                    },
                    {
                        title: 'Ngân hàng',
                        path: '/user/account/payment'
                    },
                    {
                        title: 'Địa chỉ',
                        path: '/user/account/address'
                    },
                    {
                        title: 'Đổi mật khẩu',
                        path: '/user/account/password'
                    },
                    {
                        title: 'Cài đặt thông báo',
                        path: '/user/account/notification'
                    }
                ]
            }
        },
        {
            icon: <CustomerIcon/>,
            iconActive: <CustomerIconActive/>,
            title: "Khách hàng",
            path: "/user/bcd/xyc",
        },
    ]
    return (
        <div style={{display: "flex"}}>
            <SideBar options={MORE_ITEMS} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO941SlcazswY2FA7z4-v40b3BPCZ0dL2T_w&usqp=CAU'}/>
            <div style={{maxWidth: "80%", width: "80%", marginLeft: "20%"}}>{props.children}</div>
        </div>
    )
}

export default DefaultLayoutUser;