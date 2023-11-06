import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import ItemCardHorizontal from '../components/common/ItemCarHorizontal';
import AddressGetIt from '../components/common/AddressGetIt';
import AddATip from '../components/common/AddATip';
import EstimatedOrder from '../components/common/EstimatedOrder';

import { getAllCartItem } from "../api/cartItemApi";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import cartEmpty from '../assets/images/cart-empty.png'

const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    const user = useSelector(state => state.auth.currentUser);

    const getData = async() => {
        const result = await getAllCartItem();
        setCartItems(result.productData);
    }

    useEffect(() => {
        if(user){
            getData();
        }
    },[user]);

    return (
        <Box 
            display={"flex"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            minHeight={"80vh"}
        >
            <Grid container xs={8} width={"100%"}>
                <Typography variant='h4' fontWeight={"600"}>
                    Your cart
                </Typography>
                <Grid item container xs={12} justifyContent={"space-between"} mt={4} spacing={2}
                >
                    <Grid item lg={7} xs={12}>
                        <Typography fontWeight={"600"} fontSize={"0.9rem"} color={"GrayText"}>
                            YOUR ORDER (1 ITEM)
                        </Typography>
                        <Stack spacing={2} mt={2}
                            sx={{
                                maxHeight: "400px",
                                overflowY: "auto"
                            }}>
                            {cartItems.length > 0 ? 
                                cartItems.map((item, index) => (
                                    <ItemCardHorizontal item={item} key={index}/>
                                )) :
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "center"
                                }}>
                                    <img src={cartEmpty}/>
                                </Box>
                            }
                        </Stack>
                        <Button variant='outlined' fullWidth size='large'
                            sx={{
                                mt: 2,
                                borderRadius:"0px",
                                color: "black",
                                border: "1px solid #000",
                                "&:hover": {
                                    border: "1px solid #000",
                                    bgcolor: "rgba(0, 0, 0, 0.09)"
                                }
                            }}
                        >
                            Add more items
                        </Button>
                    </Grid>

                    <Grid item lg={4} xs={12}>
                        <Stack spacing={4}>
                            <AddressGetIt/>
                            <Box
                            sx={{
                                width: "100%",
                                borderTop: "1px solid #ccc"
                            }}/>
                            <AddATip/>
                            <Box
                            sx={{
                                width: "100%",
                                borderTop: "1px solid #ccc"
                            }}/>
                            <EstimatedOrder/>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Cart;