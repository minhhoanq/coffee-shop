import { Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import DescriptionProduct from "./DescriptionProduct";
import Reviews from "./Reviews";

const TabReviews = props => {
    const [tab, setTab] = useState('Desc');
    const [qtyRating, setQtyRating] = useState(0);
    const {item} = props;

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
                        {/* ({qtyRating}) */}
                    </Typography>
                </Typography>
            </Stack>

            {tab === 'Desc' ? <DescriptionProduct item={item}/> : <Reviews qtyRate={(qty) => setQtyRating(qty)}/>}
        </Grid>
    )
}

export default TabReviews;