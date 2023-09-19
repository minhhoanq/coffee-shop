import React from "react";

import PersonIcon from '@mui/icons-material/Person';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

const menus = [
    {
        title: "Tài khoản của tôi",
        icon: <PersonIcon/>,
        state: "profile"
    },
    {
        title: "Nhân viên",
        icon: <Diversity3Icon/>,
        state: "employee"
    },
    {
        title: "Khách hàng",
        icon: <Diversity1Icon/>,
        state: "customer"
    }
]

const serviceMenus = [
    {
        title: "Tài khoản của tôi",
        icon: <PersonIcon/>,
        state: "profile"
    },
    {
        title: "Nhân viên",
        icon: <Diversity3Icon/>,
        state: "employee"
    },
    {
        title: "Khách hàng",
        icon: <Diversity1Icon/>,
        state: "customer"
    }
]

const investmentMenus = [
    {
        title: "Tài khoản của tôi",
        icon: <PersonIcon/>,
        state: "profile"
    },
    {
        title: "Nhân viên",
        icon: <Diversity3Icon/>,
        state: "employee"
    },
    {
        title: "Khách hàng",
        icon: <Diversity1Icon/>,
        state: "customer"
    }
]

const Sidebar = ({ sidebarWidth }) => {
    const activeState = "profile"

    const container = window !== undefined ? () => window.document.body : undefined;

    const menuItem = (props) => {
        return (
            <ListItem key={props.index} disableGutters disablePadding sx={{ py: 5}}>
                <ListItemButton
                    sx={{
                        borderRadius: "10px",
                        bgcolor: props.isActive ? colors.green[600] : "",
                        color: props.isActive ? colors.common.white : "",
                        "&:hover": {
                            bgcolor: props.isActive ? colors.green[600] : "",
                            color: props.isActive ? colors.common.white : "",
                        }
                    }}
                >
                    <ListItemIcon sx={{
                        minWidth: "40px",
                        color: props.isActive ? colors.common.white : "",
                    }}>
                        {props.item.icon}
                    </ListItemIcon>

                    <ListItemText primary={
                        <Typography fontWeight={600}>
                            {props.icon.title}
                        </Typography>
                    }/>
                </ListItemButton>
            </ListItem>
        )
    }
    
    return (
        <>
        </>
    )
}

export default Sidebar;