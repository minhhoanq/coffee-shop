
import { Box, Button, IconButton, ListItemIcon, Rating, Stack, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import MPaper from "./MPaper";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemCard = props => {
    const item = props.item;

    return (
            <MPaper
                height={"100%"}
                // width={"100%"}
            >
                <a href={`/shop/${item.slug}`} style={{ 
                        color: "rgba(0, 0, 0, 0.8)",
                        "&:hover" : {
                            color: "#000"
                        },
                }}>
                    <Box
                        sx={{
                            pt: "100%",
                            position: "relative",
                            "& img": {
                                position: "absolute",
                                top: 0,
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: 0,
                            }
                        }}  
                    >
                        <img src={item.productImg} alt="" style={{
                            borderRadius: "10px",
                            "&:hover" : {
                                color: "#000"
                            }
                        }}/>
                    </Box>

                    <Stack spacing={1} mt={1}>
                        <Typography fontSize={"1.2rem"}>
                            ${item.price}
                        </Typography>
                        <Stack>
                            <Typography fontSize={"1.4rem"} fontWeight={"500"}>
                                {item.productName}
                            </Typography>
                            <Typography fontSize={"1.2rem"} color={"GrayText"}>
                                Category: {item.categoryData.categoryName}
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
                </a>
            </MPaper>
    )
}

export default ItemCard;