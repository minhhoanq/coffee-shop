import { Box, Grid } from "@mui/material";
import SidebarProfile from "../components/common/SidebarProfile";

const Profile = () => {
    return (
        <Box 
        sx={{
            width: "100%",
            borderTop: "1px solid #ccc",
            borderBottom: "1px solid #ccc",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}
        >
            <Grid container xs={8} width={"100%"}>
                <Grid item xs={12}>
                    <SidebarProfile/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Profile;