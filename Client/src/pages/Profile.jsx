import { Box, Grid } from "@mui/material";
import SidebarProfile from "../components/common/SidebarProfile";
import { useLocation } from "react-router-dom";
import Personal from "./Personal";
// import Address from "./Address";

const Profile = () => {

    const path = useLocation();
    const first = '/user/account/';
    let temp = <Personal/>;
    

    // if(path.pathname === `${first}`) {
    //     temp = <Personal/>
    // }

    const Page = props => {
        return (
            temp
        )
    }

    return (
        <Box 
        sx={{
            width: "100%",
            borderTop: "1px solid #ccc",
            borderBottom: "1px solid #ccc",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            bgcolor: "#ccc",
        }}
        >
            <Grid container xs={8} width={"100%"} 
                sx={{
                    boxShadow: "rgba(0, 0, 0, 0.2) 0rem 0.25rem 0.5rem",
                    bgcolor:"#fff"
                }}
            >
                <Grid item xs={3}>
                    <SidebarProfile/>
                </Grid>

                <Grid item xs={9}>
                    <Box width={"100%"} height={"100%"} >
                        <Page/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Profile;