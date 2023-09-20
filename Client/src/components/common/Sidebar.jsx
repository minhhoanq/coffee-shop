import React from "react";

import PersonIcon from '@mui/icons-material/Person';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import PostAddIcon from '@mui/icons-material/PostAdd';

import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, colors, Box, Drawer, Paper, List } from "@mui/material";
import Animate from './Animate';
import logo from '../../assets/images/logo.jpg'

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
        title: "Nguyên liệu",
        icon: <WarehouseIcon/>,
        state: "warehouse"
    },
    {
        title: "Đơn nhập hàng",
        icon: <PostAddIcon/>,
        state: "import"
    },
    {
        title: "Đơn xuất hàng",
        icon: <Diversity1Icon/>,
        state: "export"
    }
]

const investmentMenus = [
    {
        title: "Tài khoản của tôi",
        icon: <PersonIcon/>,
        state: "proile"
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

    // const container = window !== undefined ? () => window.document.body : undefined;

    const MenuItem = (props) => {
        return (
            <ListItem key={props.index} disableGutters disablePadding sx={{ py: 0.5}}>
                <ListItemButton
                    sx={{
                        height: "35px",
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
                            {props.item.title}
                        </Typography>
                    }/>
                </ListItemButton>
            </ListItem>
        )
    }

    const drawer = (
        <Box
            padding={3} 
            paddingBottom={0}
            display={"flex"}
            flexDirection={"column"}
            height={"100vh"}
            sx={{
                "::-webkit-scrollbar": {
                    display: "none"
                }
            }}
        >
            {/* Logo */}
            <Box
                sx={{ textAlign: "center", mb: 2 }}>
                <Animate type="fade" delay={1}>
                    <img src={logo} alt="Logo" height={60}/>
                </Animate>
            </Box>
            {/* Logo */}

            <Animate sx={{ flexGrow: 1 }}>
                <Paper
                    elevation={0}
                    square
                    sx={{
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                        p: 2,
                        height: "100%",
                        boxShadow: "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px" 
                    }}
                >
                    {/* MenuGroup1 */}
                    <List>
                        {menus.map((item, index) => (
                            <MenuItem
                                key={index}
                                item={item}
                                isActive={item.state === activeState}
                            />
                        ))}
                    </List>
                    {/* MenuGroup1 */}

                    {/* MenuGroup2 */}
                    <List>
                        <ListItem>
                            <Typography fontWeight={600} mt={1} color={colors.grey[600]}>
                                Dịch vụ
                            </Typography>
                        </ListItem>
                        {serviceMenus.map((item, index) => (
                            <MenuItem
                                key={index}
                                item={item}
                                isActive={item.state === activeState}
                            />
                        ))}
                    </List>
                    {/* MenuGroup2 */}

                    {/* MenuGroup3 */}
                    <List>
                        <ListItem>
                            <Typography fontWeight={600} mt={1} color={colors.grey[600]}>
                                Chức năng
                            </Typography>
                        </ListItem>
                        {investmentMenus.map((item, index) => (
                            <MenuItem
                                key={index}
                                item={item}
                                isActive={item.state === activeState}
                            />
                        ))}
                    </List>
                    {/* MenuGroup3 */}
                </Paper>
            </Animate>

        </Box>
    )
    
    return (
        <Box
            component={"nav"}
            sx={{
                width: { md: sidebarWidth },
                flexShrink: { md: 0 }
            }}
        >
            <Drawer
                variant="permanent"
                sx={{
                    display: {xs: "none", sm: "none", md: "block"},
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: sidebarWidth,
                        borderWidth: 0,
                        bgcolor: "transparent",
                        "::-webkit-scrollbar": {
                            display: "none"
                        }
                    }
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    )
}

export default Sidebar;