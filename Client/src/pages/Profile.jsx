import { Box, Grid } from "@mui/material";
import SidebarProfile from "../components/common/SidebarProfile";
import { useLocation } from "react-router-dom";
import Personal from "./Personal";
import Address from "./Address";
// import Address from "./Address";

const Profile = () => {

    const path = useLocation();
    const first = '/user/account/';
    // let temp = <Personal/>;
    let temp = <Address/>;
    

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
            }}
        >
            <Grid container xs={8} width={"100%"}
            >
                <Grid item xs={3} >
                    <SidebarProfile/>
                </Grid>

                {/* <Grid item xs={9}>
                    <Box width={"100%"} height={"100%"}>
                        <Page/>
                    </Box>
                </Grid> */}
            </Grid>
        </Box>
    )
}

export default Profile;