import { Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import DescriptionProduct from "./DescriptionProduct";
import Reviews from "./Reviews";

const TabReviews = props => {
    const [tab, setTab] = useState('Desc');

    const {item, ratings} = props;

    console.log(item)
    console.log(ratings)

    return (
        <Grid xs={8}>
            <Stack direction={"row"} spacing={1} mb={2}>
                <Typography 
                    variant="h5" 
                    fontWeight={"600"} 
                    onClick={() => setTab("Desc")}
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
                        ({ratings.length})
                    </Typography>
                </Typography>
            </Stack>

            {tab === 'Desc' ? <DescriptionProduct item={item}/> : <Reviews item={item} ratings={ratings}/>}
        </Grid>
    )
}

export default TabReviews;