
import { Box, Button, IconButton, ListItemIcon, Rating, Stack, Typography } from "@mui/material";
import MPaper from "./MPaper";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemCard = () => {
    return (
        <MPaper
            height={"100%"}
            // width={"100%"}
        >
            <Box
                sx={{
                    pt: "100%",
                    position: "relative",
                    "& img": {
                        position: "absolute",
                        top: 0,
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                        borderRadius: 0,
                    }
                }}  
            >
                <img src="https://inlysugiare.vn/wp-content/uploads/2020/05/ly-ca-phe-bac-xiu-da.jpg" alt=""/>
            </Box>

            <Stack spacing={1} mt={1}>
                <Typography fontSize={"1.2rem"}>
                    $12
                </Typography>
                <Stack>
                    <Typography fontSize={"1.4rem"} fontWeight={"500"}>
                        Bạc xỉu
                    </Typography>
                    <Typography fontSize={"1.2rem"} color={"GrayText"}>
                        Category: Cafe
                    </Typography>
                </Stack>
                <Stack spacing={1} direction={"row"}>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    <Typography>
                        (4)
                    </Typography>
                </Stack>

                <Button variant="outlined" size="large" sx={{
                    color: "#000",
                    outline: "#000",
                    borderRadius: "50px"
                }}
                startIcon={<AddShoppingCartIcon/>}
                >
                    Add to cart
                </Button>
            </Stack>
        </MPaper>
    )
}

export default ItemCard;