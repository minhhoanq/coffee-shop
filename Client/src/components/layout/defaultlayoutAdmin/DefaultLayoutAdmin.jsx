import React, { useEffect, useState } from "react";
import SidebarDashBoard from "../../common/SidebarDashBoard";
import { Box, Grid, Toolbar } from "@mui/material";
import Sidebar2 from "../../common/Sidebar2";
import sizeConfigs from "../../../config/sizeConfigs";
import colorConfigs from "../../../config/colorConfigs";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const DefaultLayoutAdmin = (props) => {

    return (
        <Box sx={{
            display: "flex"
        }}>
            {/* <Box item xs={3} sx={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                width: "350px"
            }}>
                <SidebarDashBoard/>
            </Box>
                
            <Box width={"100%"} height={"100%"} paddingLeft={"350px"}>
                {props.children}
            </Box> */}

            <Box
                component={"nav"}
                sx={{
                    width: sizeConfigs.sideBar.width,
                    flexShrink: 0
                }}
            >
                <Sidebar2/>
            </Box>
            <Box
                component={"main"}
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: `calc(100% - ${sizeConfigs.sideBar.width})`,
                    minHeight: "100vh",
                    backgroundColor: colorConfigs.mainBg
                }}
            >
                <Toolbar/>
                <Outlet/>
            </Box>
        </Box>
    )
}

export default DefaultLayoutAdmin;