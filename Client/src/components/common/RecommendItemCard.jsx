import { Box, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom";

const RecommendItemCard = props => {
    const item = props.item;
    console.log(item)
    return (
        <Box padding={"10px"} sx={{
            border: "1px solid #ccc",
            borderRadius: "5px"
        }}>
            <Link 
                to={`/shop/${item.slug}`} style={{ 
                color: "rgba(0, 0, 0, 0.8)",
                "&:hover" : {
                    color: "#000"
                },
            }}>
                <Stack direction={"row"}>
                    <Box flex={2}>
                        <Typography variant="h6" fontWeight={600}>
                            {item.productName}
                        </Typography>

                        <Typography>
                            {/* {item.productDescription} */}
                            This returning favorite features a house made syrup with brown sugar and spices.
                        </Typography>
                    </Box>
                    <Box sx={{
                        padding: "0 10px",
                    }}>
                        <img src={item.productImg} alt="" 
                            style={{
                                height: "90px",
                                width: "90px",
                                objectFit: "cover"
                            }}
                        />
                    </Box>
                </Stack>
            </Link>
        </Box>
    )
}

export default RecommendItemCard;