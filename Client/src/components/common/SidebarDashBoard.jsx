import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material"

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
        title: "Employees",
        icon: <PersonIcon/>,
        state: "employees",
        pathname: "/dashboard/employees",
        childrens: [
            {
                title: "List of employee",
                state: "list_of_employee",
                pathname: "/dashboard/employees",
            },
            {
                title: "Trash",
                state: "trash",
                pathname: "/dashboard/employees/trash",
            },
            {
                title: "Timekeeping",
                state: "timekeeping",
                pathname: "/dashboard/employees/timekeeping",
            }
        ]
    },
    ,
    {
        title: "Customers",
        icon: <PersonIcon/>,
        state: "customers",
        pathname: "/dashboard/customers",
        // childrens: [
        //     {
        //         title: "List of customer",
        //         state: "list_of_customer",
        //         pathname: "/dashboard/customers",
        //     },
        //     {
        //         title: "Trash",
        //         state: "trash",
        //         pathname: "/dashboard/customers/trash",
        //     },
        //     {
        //         title: "Timekeeping",
        //         state: "timekeeping",
        //         pathname: "/dashboard/customers/timekeeping",
        //     }
        // ]
    },
    {
        title: "Products",
        icon: <BallotOutlinedIcon/>,
        state: "product",
        pathname: "/dashboard/products",
    },
    {
        title: "Kho voucher",
        icon: <DiscountOutlinedIcon/>,
        state: "customer"
    }
]

const SidebarDashBoard = () => {
    const [activeParent, setActiveParent] = useState("/dashboard");

    const Menu = props => {
        const [activeChildren, setActiveChildren] = useState("");

        const option = props.option;
        const childrenOption = option.childrens;
        const [open, setOpen] = useState(true);
        const active = props.active;

        return (
            <Link width={"100%"} to={option.pathname} style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "rgba(0, 0, 0, 0.8)",
                
            }}>
                <ListItem onClick={() => setOpen(!open)}>
                    <ListItemButton sx={{
                        backgroundColor: active === option.pathname ? "#ccc" : "#fff",
                        borderRadius: "2px",
                        "&:hover" : {
                            backgroundColor: active === option.pathname && "#ccc",
                            color: "#000"
                        }
                    }}
                    onClick={() => setActiveParent(option.pathname)}
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
                                textDecoration: "none",
                                color: "rgba(0, 0, 0, 0.8)",
                            }}
                        >
                            <ListItem>
                                <ListItemButton sx={{
                                    backgroundColor: activeChildren === item.pathname ? "#ccc" : "#fff",
                                    borderRadius: "2px",
                                    "&:hover" : {
                                        backgroundColor: activeChildren === item.pathname && "#ccc",
                                        color: "#000"
                                    }
                                    }}
                                    onClick={() => {
                                        // setActiveParent(option.pathname);
                                        setActiveChildren(item.pathname);
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
                    <Menu option={item} key={index} active={activeParent} />
                ))}
            </Stack>
        </Box>
    )
}

export default SidebarDashBoard;