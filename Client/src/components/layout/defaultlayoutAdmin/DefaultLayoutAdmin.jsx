import React, { useState } from "react";
import SidebarDashBoard from "../../common/SidebarDashBoard";
import { Box, Grid } from "@mui/material";

const DefaultLayoutAdmin = props => {
    return (
        <Box
        sx={{
            width: "100%",
            borderTop: "1px solid #ccc",
            borderBottom: "1px solid #ccc",
        }}
        >
            <Grid container xs={12} width={"100%"}
            sx={{
                // display:"flex",
                // justifyContent:"center",
                // alignItems:"center",
            }}
            >
                <Grid item xs={3} >
                    <SidebarDashBoard/>
                </Grid>

                <Grid item xs={9}>
                    <Box width={"100%"} height={"100%"}>
                        {props.children}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default DefaultLayoutAdmin;