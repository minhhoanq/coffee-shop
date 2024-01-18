
import { Box, Button, IconButton, ListItemIcon, Rating, Stack, Typography, colors } from "@mui/material";
import { Link } from 'react-router-dom';
import MPaper from "./MPaper";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemCard = props => {
    const item = props.item;

    return (
            <MPaper
                height={"100%"}
                // width={"100%"},
            >
                <a href={`/shop/${item.slug}`} style={{ 
                        color: "rgba(0, 0, 0, 0.8)",
                        "&:hover" : {
                            color: "#000"
                        },
                }}>
                    <Box>
                        <Stack sx={{
                            height: "160px", 
                            width: "160px",
                            border: `2px dotted ${colors.green[600]}`,
                            borderRadius: "50%",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <img src={item.productImg} alt="" style={{
                                objectFit: "contain",
                                height: "120px", 
                                width: "120px",
                                borderRadius: "50%"
                            }}/>
                        </Stack>
                    </Box>

                    <Stack spacing={1} mt={1}>
                        <Stack>
                            <Typography fontSize={"1.5rem"} fontWeight={"600"}>
                                {item.productName}
                            </Typography>
                            <Typography fontSize={"1rem"} color={"GrayText"}>
                                Category: {item.categoryData.categoryName}
                            </Typography>
                        </Stack>
                        <Typography fontSize={"1.6rem"} color={colors.green[600]} fontWeight={"600"}>
                            ₫{item.price}
                        </Typography>
                        <Stack spacing={1} direction={"row"}>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                            <Typography>
                                (4)
                            </Typography>
                        </Stack>

                        <Button variant="outlined"
                            sx={{
                                border: `1px solid ${colors.green[600]}`,
                                color: colors.green[600],
                                "&:hover" : {
                                    border: `1px solid ${colors.green[600]}`,
                                }
                            }}
                        >
                            Add to cart
                        </Button>
                    </Stack>
                </a>
            </MPaper>
    )
}

export default ItemCard;