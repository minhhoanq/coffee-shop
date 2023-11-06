import { Box, Button, Menu, Stack, Typography, colors } from "@mui/material";

import ItemCartHorizontal from './ItemCarHorizontal';
import { getAllCartItem } from "../../api/cartItemApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import cartEmpty from "../../assets/images/cart-empty.png"
import { Link } from "react-router-dom";

const MenuCart = props => {
    const [cartItems, setCartItems] = useState([]);
    const user = useSelector(state => state.auth.currentUser);
    const [checkDelete, setCheckDelete] = useState(false);

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

    return(
        <Menu
            anchorEl={props.props.anchorEl}
            id={props.props.id}
            open={props.props.open}
            onClose={props.props.onClose}
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
                        Your Cart ( {cartItems.length} )
                    </Typography>
                    
                    <Stack spacing={2}
                        sx={{
                            maxHeight: "250px",
                            overflowY: "auto"
                        }}
                    >
                        {cartItems.length > 0 ? 
                            cartItems.map((item, index) => (
                                <>
                                    <ItemCartHorizontal delete={() => setCheckDelete(true)} heightImg={"80%"} item={item} key={index}/>
                                    {cartItems.length > 1 && 
                                    <Box sx={{
                                        height: "1px",
                                        width: "100%",
                                        borderTop: "1px solid #ccc"
                                    }}/>}
                                </>
                            )) :
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <img src={cartEmpty} style={{
                                    height: "200px"
                                }}/>
                            </Box>
                        }
                    </Stack>

                    <Button variant="contained" sx={{
                        bgcolor: colors.brown[500],
                        "&:hover" : {
                            bgcolor: colors.brown[400]
                        }
                    }}>
                        <Link to={"/cart"}
                            style={{
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                textDecoration: "none",
                                color: "#fff",
                                "&:hover" : {
                                    color: "#fff"
                                }
                            }}
                        >
                            Continue to cart
                        </Link>
                    </Button>
                </Stack>
            </Box>
        </Menu>
    )
}

export default MenuCart;