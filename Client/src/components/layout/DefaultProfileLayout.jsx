import { Box, Grid } from "@mui/material"
import SidebarProfile from "../common/SidebarProfile";

const DefaultProfileLayout = props => {
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
                    <SidebarProfile/>
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

export default DefaultProfileLayout;