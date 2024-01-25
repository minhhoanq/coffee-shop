import { Box, Grid, IconButton, Stack, Typography } from "@mui/material"
import EstimatedOrder from "../components/common/EstimatedOrder";
import ItemCardHorizontal from "../components/common/ItemCarHorizontal";
import { getAllCartItem } from "../api/cartItemApi";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import cartEmpty from '../assets/images/cart-empty.png';
import InfoOrder from "../components/common/InfoOrder";

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);
    const user = useSelector(state => state.auth.currentUser);
    const [checkDelete, setCheckDelete] = useState(false);
    const [dropDownItem, setDropdownItem] = useState(false);

    const getData = async() => {
        const result = await getAllCartItem();
        setCartItems(result.productData);
    }

    useEffect(() => {
        if(user) {
            getData();
            setCheckDelete(false);
        }
    },[user, checkDelete])

    return (
        <Box 
            display={"flex"}
            justifyContent={"center"}
            alignItems={"flex-start"}
        >
            <Grid container xs={8}>
                <Typography variant="h4" fontWeight={600}>
                    Order Detail
                </Typography>
                <Grid item container xs={12} justifyContent={"space-between"} mt={2} spacing={2}>
                    <Grid item xs={7}>
                        <InfoOrder/>
                    </Grid>
                    <Grid item xs={4}>
                        <EstimatedOrder/>
                    </Grid>
                </Grid>
                <Typography variant="h5" fontWeight={600}>
                    Product list
                </Typography>
                <Stack spacing={2} mt={2}
                    sx={{
                        width: "100%",
                        maxHeight: "300px",
                        overflowY: "auto",
                        border: "1px solid #ccc",
                        p: 2
                    }}>
                    {cartItems.length > 0 ? 
                        cartItems.map((item, index) => (
                            <ItemCardHorizontal item={item} key={index} delete={() => setCheckDelete(true)}/>
                        )) :
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <img src={cartEmpty}/>
                        </Box>
                    }
                </Stack>
            </Grid>
        </Box>
    )
}

export default Checkout;