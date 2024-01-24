import { Box, IconButton, InputBase, Stack, Typography, colors } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useCallback } from "react";
import { deleteCartItem } from "../../api/cartItemApi";

const ItemCardHorizontal = props => {
    const item = props.item;

    const handleDeleteProduct = useCallback(async(e) => {
        const priceId = item.priceId;
        const deleteItemToCart = await deleteCartItem(priceId);
        props.delete();
    })

    return (
        <Stack direction={"row"} justifyContent={"space-between"} height={"60px"}>
            <Stack direction={"row"} spacing={4} height={"100%"} alignItems={"center"}>
                <Box height={"60px"} width={"60px"} sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // border: `2px dotted ${colors.brown[600]}`,
                    borderRadius: "50%"
                }}>
                    <img 
                        src={item.priceData.productSizeData.productData.productImg || ""} 
                        alt="" 
                        height={`${props.heightImg ? props.heightImg : "100%"}`}
                        style={{
                            borderRadius: "50%"
                        }}
                        />
                </Box>

                <Stack justifyContent={"center"} height={"100%"}>
                    <Typography fontWeight={"500"} variant="h6">
                        {item.priceData.productSizeData.productData.productName || ""}
                    </Typography>
                    <Typography>
                        Categories: Cafe
                    </Typography>
                    <Typography>
                        Size: {item.priceData.productSizeData.sizeData.sizeName || ""}
                    </Typography>
                </Stack>
            </Stack>
            <Stack justifyContent={"center"} alignItems={"flex-end"}>
                <Stack direction={"row"}>
                    <Typography fontSize={"1.2rem"} mr={"10px"}>
                        x{item.quantity || ""}
                    </Typography>
                    <Typography fontSize={"1.2rem"}>
                        ₫{item.priceData.price || ""}
                    </Typography>
                </Stack>
                <IconButton 
                    onClick={handleDeleteProduct}
                >
                    <DeleteOutlineOutlinedIcon/>
                </IconButton>
            </Stack>
        </Stack>
    )
}

export default ItemCardHorizontal;