import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material"

import PersonIcon from '@mui/icons-material/Person';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import HomeIcon from '@mui/icons-material/Home';
import logo from "../../assets/images/logo.jpg";
import { Link, useLocation } from "react-router-dom";

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
        childrens: [
            {
                title: "List of customer",
                state: "list_of_customer",
                pathname: "/dashboard/customers",
            },
            {
                title: "Trash",
                state: "trash",
                pathname: "/dashboard/customers/trash",
            },
            {
                title: "Timekeeping",
                state: "timekeeping",
                pathname: "/dashboard/customers/timekeeping",
            }
        ]
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

const MenuSidebar = () => {
    const [activeParent, setActiveParent] = useState("/dashboard");
    const [activeChildren, setActiveChildren] = useState("");
    const { pathname } = useLocation();

    const [open, setOpen] = useState(false);

    console.log(activeParent + "|" + pathname)

    // const handleClickItemSidebar = () => {
    //     // setOpen(!open);
    //     // setActiveParent(item.pathname);
    //     if(activeParent !== pathname) {
    //         setActiveParent(pathname);
    //         setOpen(!open)
    //     }
    // }

    return (
        <>
            {menus.map((item, index) => (
                <Link width={"100%"} key={index} to={item.pathname} style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "rgba(0, 0, 0, 0.8)",
                }}
                    onClick={() => {
                        if(activeParent !== item.pathname) {
                            setActiveParent(item.pathname);
                            setOpen(true);
                        }
                    }}
                >
                    <ListItem >
                        <ListItemButton sx={{
                            backgroundColor: activeParent === item.pathname ? "#ccc" : "#fff",
                            borderRadius: "2px",
                            "&:hover" : {
                                backgroundColor: activeParent === item.pathname && "#ccc",
                                color: "#000"
                            }
                        }}
                        >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText>
                                {item.title}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <Box ml={"55px"} width={"100% - 55px"}
                        sx={{
                            display: open && item.pathname ===activeParent ? "block" : "none"
                        }}
                    >
                        {item.childrens && (item.childrens).map((item, index) => (
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
            ))}
        </>
    )
}

export default MenuSidebar;