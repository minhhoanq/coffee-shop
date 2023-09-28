import { Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import DescriptionProduct from "./DescriptionProduct";
import Reviews from "./Reviews";

const TabReviews = () => {
    const [tab, setTab] = useState('Desc');

    console.log(tab)

    return (
        <Grid xs={8}>
            <Stack direction={"row"} spacing={1} mb={2}>
                <Typography variant="h5" fontWeight={"600"} onClick={() => setTab("Desc")}
                    sx={{
                        cursor: "pointer"
                    }}
                >
                    Description
                </Typography>

                <Typography 
                    variant="h5" 
                    fontWeight={"600"} 
                    display={"flex"} 
                    alignItems={"center"} 
                    onClick={() => setTab("Reviews")}
                    sx={{
                        cursor: "pointer"
                    }}
                >
                    Reviews 
                    <Typography marginLeft={1}>
                        (4)
                    </Typography>
                </Typography>
            </Stack>

            {tab === 'Desc' ? <DescriptionProduct/> : <Reviews/>}
        </Grid>
    )
}

export default TabReviews;