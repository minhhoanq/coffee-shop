import { Box, Button, Menu, Stack, Typography, colors } from "@mui/material";

import ItemCartHorizontal from './ItemCarHorizontal';
import { getAllCartItem } from "../../api/cartItemApi";
import { useEffect, useState } from "react";

const MenuCart = props => {
    const [cartItems, setCartItems] = useState([])

    const getData = async() => {
        const result = await getAllCartItem();
        setCartItems(result.productData);
    }

    useEffect(() => {
        getData();
    },[])

    return(
        <Menu
            anchorEl={props.props.anchorEl}
            id={props.props.id}
            open={props.props.open}
            onClose={props.props.onClose}
            onClick={props.props.onClick}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1,
                    "& .AccountCircleIcon-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1
                    },
                    "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0
                    }
                }
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
            <Box sx={{
                width:"400px",
                p: 2
            }}>
                <Stack spacing={2}>
                    <Typography variant="h6" fontWeight={600}>
                        Your Cart ( 2 )
                    </Typography>
                    
                    <Stack
                        sx={{
                            maxHeight: "250px",
                            overflowY: "auto"
                        }}
                    >
                        {cartItems.map((item, index) => (
                            <ItemCartHorizontal heightImg={"70%"} item={item} key={index}/>
                        ))}
                    </Stack>

                    <Button variant="contained" sx={{
                        bgcolor: colors.brown[500],
                        "&:hover" : {
                            bgcolor: colors.brown[400]
                        }
                    }}>
                        Continue to cart
                    </Button>
                </Stack>
            </Box>
        </Menu>
    )
}

export default MenuCart;