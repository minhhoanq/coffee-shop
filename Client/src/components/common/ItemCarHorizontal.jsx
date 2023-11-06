import { Box, IconButton, InputBase, Stack, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useCallback } from "react";
import { deleteCartItem } from "../../api/cartItemApi";

const ItemCardHorizontal = props => {
    const item = props.item;

    const handleDeleteProduct = useCallback(async(e) => {
        const productSizeId = item?.productSizeData.id;
        const deleteItemToCart = await deleteCartItem(productSizeId);
        props.delete();
    })    

    return (
        <Stack direction={"row"} justifyContent={"space-between"} height={"60px"}>
            <Stack direction={"row"} spacing={4} height={"100%"} >
                <Box height={"100%"} sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <img src={item?.productSizeData.productData.productImg} alt="" height={`${props.heightImg ? props.heightImg : "100%"}`}/>
                </Box>

                <Stack justifyContent={"center"} height={"100%"}>
                    <Typography fontWeight={"500"} variant="h6">
                        {item?.productSizeData.productData.productName}
                    </Typography>
                    <Typography>
                        Categories: Cafe
                    </Typography>
                </Stack>
            </Stack>
            <Stack justifyContent={"center"} >
                <Typography fontSize={"1.2rem"}>
                    ${item?.price}
                </Typography>

                <IconButton onClick={handleDeleteProduct}>
                    <DeleteOutlineOutlinedIcon/>
                </IconButton>
            </Stack>
        </Stack>
    )
}

export default ItemCardHorizontal;