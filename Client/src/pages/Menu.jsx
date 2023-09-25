import { Box, Grid } from "@mui/material";
import Banner from "../components/common/Banner";
import Seach from "../components/common/Search";

const Menu = () => {
    return (
        <Box >
            <Banner/>
            <Grid container 
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Grid item xs={10} >
                    <Seach/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Menu;