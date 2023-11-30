import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material"

import PersonIcon from '@mui/icons-material/Person';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HomeIcon from '@mui/icons-material/Home';
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import MenuSidebar from "./MenuSidebar";



const SidebarDashBoard = () => {

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
                <MenuSidebar />
            </Stack>
        </Box>
    )
}

export default SidebarDashBoard;