import { Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material"

import PersonIcon from '@mui/icons-material/Person';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import { useState } from "react";
import { useSelector } from "react-redux";
// import WarehouseIcon from '@mui/icons-material/Warehouse';
// import PostAddIcon from '@mui/icons-material/PostAdd';

const menus = [
    {
        title: "Tài khoản của tôi",
        icon: <PersonIcon/>,
        state: "account",
        childrens: [
            {
                title: "Hồ sơ",
                state: "profile",
            },
            {
                title: "Địa chỉ",
                state: "address",
            },
            {
                title: "Ngân hàng",
                state: "payment",
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
                        <ListItem>
                            <ListItemButton>
                                <ListItemText>
                                    {item.title}
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </Box>
            </Box>
        )
    }

    return (
        <Box sx={{
            height: '83vh',
            maxWidth: "250px",
            borderRight: "1px solid #ccc",
            bgcolor: "#fff",
        }}>
            <Box width={"100%"}
                p={4}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <img src={user.image} height={100} width={100} style={{
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