import { Box, Grid, IconButton, Stack, Typography } from "@mui/material"
import AddressGetIt from "../components/common/AddressGetIt";
import Paypal from "../components/common/Paypal";
import AddATip from "../components/common/AddATip";
import EstimatedOrder from "../components/common/EstimatedOrder";

import logo from "../assets/images/logo.jpg"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";
import ItemCardHorizontal from "../components/common/ItemCarHorizontal";
import { getAllCartItem } from "../api/cartItemApi";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import cartEmpty from '../assets/images/cart-empty.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);
    const user = useSelector(state => state.auth.currentUser);
    const [checkDelete, setCheckDelete] = useState(false);
    const [price, setPrice] = useState(0);
    const [dropDownItem, setDropdownItem] = useState(false);

    const getData = async() => {
        const result = await getAllCartItem();
        setCartItems(result.productData);
    }

    let priceTotal = 0;
    cartItems?.forEach(element => {
        priceTotal += element.price
    });

    useEffect(() => {
        if(user) {
            getData();
            setCheckDelete(false);
        }
    },[user, checkDelete])

    return (
        <Box width={"100%"}>
            
            <Grid container 
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Grid item xs={8} >
                    <Link to={'/cart'} style={{
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                            color: "rgba(0, 0, 0, 0.8)",
                            "&:hover" : {
                                color: "#000"
                            },
                        }}
                    >
                        <Box width={"100%"} margin={"16px 0"} sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative"
                        }}>
                            <Stack direction={"row"}
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    alignItems: "center"
                                }}
                            >
                                <IconButton>
                                    <ArrowBackIosIcon/>
                                </IconButton>
                                <Typography>
                                    Back To Cart
                                </Typography>
                            </Stack>
                            <img src={logo} height={60}/>
                        </Box>
                    </Link>
                    <Typography fontSize={"1.8rem"} fontWeight={600}>
                        Checkout
                    </Typography>
                    <Stack direction={"row"} width={"100%"} justifyContent={"space-between"} mt={5}>
                        <Box width={"100%"}
                            sx={{
                                mr: "40px"
                            }}
                        >
                            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                <Typography fontWeight={"600"} fontSize={"0.9rem"} color={"GrayText"} >
                                        YOUR SUMMARY ({cartItems.length} ITEM)
                                </Typography>
                                <IconButton onClick={() => setDropdownItem(!dropDownItem)}>
                                    {dropDownItem ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                                </IconButton>
                            </Stack>
                            <Stack spacing={2} mt={2}
                                sx={{
                                    maxHeight: "400px",
                                    overflowY: "auto",
                                    minHeight: "200px",
                                    padding: "0 0 32px 0",
                                    borderBottom: "1px solid #ccc",
                                    visibility: dropDownItem ? "visibility" : "hidden",
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
                            <Box width={"100%"} sx={{
                                display: "flex",
                                justifyContent: "center",
                                mt: "32px",
                            }}>
                                <Paypal amount={price}/>
                            </Box>
                            
                        </Box>

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
                                <EstimatedOrder items={cartItems} price={e => setPrice(e)}/>
                            </Stack>
                        </Grid>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Checkout;