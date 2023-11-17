import React, { useState } from "react";
import SidebarDashBoard from "../../common/SidebarDashBoard";
import { Box, Grid } from "@mui/material";

const DefaultLayoutAdmin = props => {
    return (
        <Box>
            <Box item xs={3} sx={{
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
            </Box>
        </Box>
    )
}

export default DefaultLayoutAdmin;