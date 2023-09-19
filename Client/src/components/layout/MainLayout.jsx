import { Box } from "@mui/material"
import Sidebar from "../common/Sidebar"
import { Outlet } from "react-router-dom"

import React from "react";

const sidebarWidth = 300;

const MainLayout = (props) => {
    return (
        <Box display={"flex"}>
            {/* Sidebar */}
            <Sidebar sidebarWidth={sidebarWidth}/>
            {/* Sidebar */}

            <Box 
                component={"main"}
                sx={{
                    flexGrow: 1,
                    p: 3,
                    height: "100vh",
                    width: { sm: `calc(100% - ${sidebarWidth}px)`},
                }}
            >
                {props.children}
            </Box>
        </Box>
    )
}

export default MainLayout;