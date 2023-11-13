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
        state: "home",
        pathname: "/dashboard"
    },
    {
        title: "Employee",
        icon: <PersonIcon/>,
        state: "employee",
        pathname: "/dashboard/employee",
        childrens: [
            {
                title: "List of employee",
                state: "list_of_employee",
                pathname: "/dashboard/employee",
            },
            {
                title: "Trash",
                state: "address",
                // pathname: "/user/account/address",
            },
            {
                title: "Chấm công",
                state: "payment",
                // pathname: "/user/account/payment",
            }
        ]
    },
    {
        title: "Lịch sử mua hàng",
        icon: <BallotOutlinedIcon/>,
        state: "order"
    },
    {
        title: "Kho voucher",
        icon: <DiscountOutlinedIcon/>,
        state: "customer"
    }
]

const SidebarDashBoard = () => {
    const [activeParent, setActiveParent] = useState("home");
    const [activeChildren, setActiveChildren] = useState("");

    const Menu = props => {
        const option = props.option;
        const childrenOption = option.childrens;
        const [open, setOpen] = useState(true);
        const active = props.active;
        const activeChild = props.activeChild;

        return (
            <Link width={"100%"} to={option.pathname}>
                <ListItem onClick={() => setOpen(!open)}>
                    <ListItemButton sx={{
                        backgroundColor: active === option.state ? "#ccc" : "#fff",
                        borderRadius: "2px",
                    }}
                    onClick={() => setActiveParent(option.state)}
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
                        key={index}
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
                                <ListItemButton sx={{
                                    backgroundColor: activeChild === item.state ? "#ccc" : "#fff",
                                    borderRadius: "2px",
                                    }}
                                    onClick={() => {
                                        // setActiveParent(option.state);
                                        setActiveChildren(item.state);
                                        console.log(item.state)
                                    }}
                                >
                                    <ListItemText>
                                        {item.title}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </Box>
            </Link>
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
                    <Menu option={item} key={index} active={activeParent} activeChild={activeChildren}/>
                ))}
            </Stack>
        </Box>
    )
}

export default SidebarDashBoard;