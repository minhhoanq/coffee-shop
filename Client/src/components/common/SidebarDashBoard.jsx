import { Box, Button, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material"

import PersonIcon from '@mui/icons-material/Person';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HomeIcon from '@mui/icons-material/Home';
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";


const menus = [
    {
        title: "Home",
        icon: <HomeIcon/>,
        state: "home"
    },
    {
        title: "Employee",
        icon: <PersonIcon/>,
        state: "employee",
        childrens: [
            {
                title: "List of employee",
                state: "list_of_employee",
                pathname: "/",
            },
            {
                title: "Trash",
                state: "address",
                pathname: "/user/account/address",
            },
            {
                title: "Chấm công",
                state: "payment",
                pathname: "/user/account/payment",
            }
        ]
    },
    {
        title: "Lịch sử mua hàng",
        icon: <BallotOutlinedIcon/>,
        // state: "employee"
    },
    {
        title: "Kho voucher",
        icon: <DiscountOutlinedIcon/>,
        state: "customer"
    }
]

const SidebarDashBoard = () => {
    const [activeButton, setActiveButton] = useState("home");


    const Menu = props => {
        const option = props.option;
        const childrenOption = option.childrens;
        const [open, setOpen] = useState(true);
        const active = props.active;

        return (
            <Box width={"100%"} >
                <ListItem onClick={() => setOpen(!open)}>
                    <ListItemButton sx={{
                        backgroundColor: active === option.state ? "#ccc" : "#fff",
                        borderRadius: "2px",
                    }}
                    onClick={() => setActiveButton(option.state)}
                    >
                        <ListItemIcon>
                            {option.icon}
                        </ListItemIcon>
                        <ListItemText>
                            {option.title}
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <Box ml={"55px"} width={"100% - 55px"}
                    sx={{
                        display: open ? "block" : "none"
                    }}
                >
                    {childrenOption && childrenOption.map((item, index) => (
                        <Link to={item.pathname}
                        style={{
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                            color: "rgba(0, 0, 0, 0.8)",
                            "&:hover" : {
                                color: "#000"
                            }
                        }}
                        >
                            <ListItem>
                                <ListItemButton>
                                    <ListItemText>
                                        {item.title}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </Box>
            </Box>
        )
    }

    return (
        <Box sx={{
            height: '100vh',
            // maxWidth: "250px",
            borderRight: "1px solid #ccc",
            bgcolor: "#fff",
            position: "relative"
        }}>
            <Box width={"100%"}
                p={4}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <img src={logo} height={100} width={100} style={{
                    borderRadius: "50px",
                    objectFit: "cover"
                }}/>
            </Box>
            <Stack>
                {menus.map((item, index) => (
                    <Menu option={item} key={index} active={activeButton}/>
                ))}
            </Stack>
        </Box>
    )
}

export default SidebarDashBoard;