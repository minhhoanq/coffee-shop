import { Box, Grid } from "@mui/material";
import Banner from "../components/common/Banner";
import Seach from "../components/common/Search";
import ItemCard from "../components/common/ItemCard";

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

                <Grid item xs={10}>
                    <Grid container justifyContent="flex-start" spacing={6}>
                        <Grid item lg={3} md={4} sm={6} xs={12} ><ItemCard/></Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12} ><ItemCard/></Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12} ><ItemCard/></Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12} ><ItemCard/></Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12} ><ItemCard/></Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12} ><ItemCard/></Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12} ><ItemCard/></Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12} ><ItemCard/></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Menu;