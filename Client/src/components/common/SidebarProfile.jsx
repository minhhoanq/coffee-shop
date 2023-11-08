import { Box, Button, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material"

import PersonIcon from '@mui/icons-material/Person';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import { useState } from "react";
import { useSelector } from "react-redux";
// import WarehouseIcon from '@mui/icons-material/Warehouse';
// import PostAddIcon from '@mui/icons-material/PostAdd';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";

const menus = [
    {
        title: "Tài khoản của tôi",
        icon: <PersonIcon/>,
        state: "account",
        childrens: [
            {
                title: "Hồ sơ",
                state: "profile",
                pathname: "/user/account/profile",
            },
            {
                title: "Địa chỉ",
                state: "address",
                pathname: "/user/account/address",
            },
            {
                title: "Ngân hàng",
                state: "payment",
                pathname: "/user/account/payment",
            }
        ]
    },
    {
        title: "Lịch sử mua hàng",
        icon: <BallotOutlinedIcon/>,
        state: "employee"
    },
    {
        title: "Kho voucher",
        icon: <DiscountOutlinedIcon/>,
        state: "customer"
    }
]

const SidebarProfile = () => {
    const user = useSelector(state => state.auth.currentUser);

    const Menu = props => {
        const option = props.option;
        const childrenOption = option.childrens;
        const [open, setOpen] = useState(true)
        return (
            <Box width={"100%"} >
                <ListItem onClick={() => setOpen(!open)}>
                    <ListItemButton>
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
            <Link to={"/menu"}>
                <Button sx={{
                    position: "absolute",
                    top: 10,
                    left: 10
                }}
                >
                    <KeyboardBackspaceIcon fontSize="large"
                        sx={{
                            color: "#000"
                        }}
                    />
                </Button>
            </Link>
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
                    <Menu option={item} key={index}/>
                ))}
            </Stack>
        </Box>
    )
}

export default SidebarProfile;