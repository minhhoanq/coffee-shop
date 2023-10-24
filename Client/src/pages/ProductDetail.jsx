import React, { useCallback } from "react";

import { Box, Button, Grid, IconButton, Rating, Stack, Typography, colors } from "@mui/material";
import Banner from "../components/common/Banner";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TabReviews from "../components/common/TabReviews";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllRatingsProduct, getProductDetailBySlug } from "../api/productApi";
import { useForm } from "react-hook-form";
import { createCartItem } from "../api/cartItemApi";
import Swal from "sweetalert2";

const ProductDetail = () => {
    const [products, setProducts] = useState([]);
    const [ratings, setRatings] = useState([]);
    // const [productSizeId, setProductSizeId] = useState(products[0]?.id);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(products[0]?.productData.price);
    const [note, setNote] = useState("");
    const [size, setSize] = useState("S");

    const { slug } = useParams();

    const getDataBySlug = async() => {
        const result = await getProductDetailBySlug(slug);

        setProducts(result.dataDetailProduct);
        setPrice(result.dataDetailProduct[0]?.productData.price);
        // setProductSizeId(result.dataDetailProduct[0]?.id);
    }

    const getRatingsProductData = async() => {
        const result = await getAllRatingsProduct(slug);
        setRatings(result.ratingsData)
    }

    useEffect(() => {
        getDataBySlug();
        getRatingsProductData();
    },[]);

    console.log(products)

    const handleMinusQty = useCallback((e) => {
        const priceRoot = products[0]?.productData.price;
        let qty = quantity;
        if(quantity > 1) {
            qty--;
            setQuantity(qty);
        }
        if(size === "S") {
            setPrice(priceRoot * qty);
        } else if (size === 'M') {
            setPrice((priceRoot * qty) + (5 * qty));
        } else {
            setPrice((priceRoot * qty) + (10 * qty));
        }
    })

    const handlePlusQty = useCallback((e) => {
        const priceRoot = products[0]?.productData.price;
        let qty = quantity;
        if(quantity < 20) {
            qty++;
            setQuantity(qty);
        }
        if(size === "S") {
            setPrice(priceRoot * qty);
        } else if (size === 'M') {
            setPrice((priceRoot * qty) + (5 * qty));
        } else {
            setPrice((priceRoot * qty) + (10 * qty));
        }
    });

    const handleChooseSize = useCallback((e) => {
        const sizeId = e.target.id;
        const priceRoot = products[0]?.productData.price;
        if(sizeId === 'size-S') {
            setSize("S");
            setPrice(priceRoot * quantity)
        } else if (sizeId === 'size-M') {
            setSize("M");
            setPrice((priceRoot * quantity) + (5 * quantity))
        } else {
            setSize('L');
            setPrice((priceRoot * quantity) + (10 * quantity))
        }
    })

    console.log({
        productSizeId: 1,
        size: size,
        quantity: quantity,
        price: price
    })

    const submitAddToCart = async() => {
        const product_size = products.filter(e => e.sizeData.sizeName === size);
        const data = {
            productSizeId: product_size[0]?.id,
            quantity: quantity,
            price: price,
            note: note
        }

        const addToCart = await createCartItem(data);
        if(addToCart.err === 0) {
            Swal.fire('', addToCart.mes, 'success');
        } else if (addToCart.err === 1) {
            Swal.fire('', addToCart.mes, 'error');
        }
    }

    return (
        <Box>
            <Banner/>
            
            <Grid container
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Grid item xs={8} mt={5} height={"100%"} mb={5}>
                    <Grid item sx={{
                        display: "flex",
                        flexDirection: { xl: "row", lg: "row", md: "column", xs: "column"},
                        margin: "auto"
                    }}>
                        <Grid xs={6} sx={{
                        }}>
                            <img 
                                src={`${products[0]?.productData.productImg}`} 
                                alt="" 
                                height={"100%"}
                                style={{
                                    objectFit: "cover"
                                }}
                                />
                        </Grid>

                        <Grid xs={6} width={"100%"}>
                            <Stack height={"100%"} width={"100%"} display={"flex"} justifyContent={"space-between"}
                                sx={{
                                    paddingLeft: { xl: "40px", lg: "40px", md: "20px", xs: "20px"},
                                    paddingRight: { xl: "40px", lg: "40px", md: "20px", xs: "20px"},
                                }}
                            >
                                <Stack sx={{
                                    height: "70%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}>
                                    <Typography sx={{
                                        fontSize: { xl: "2rem", lg: "2rem", md: "1.6rem", xs: "1.4rem"},
                                        fontWeight: "600"
                                    }}>
                                        {products[0]?.productData.productName}
                                    </Typography>

                                    <Stack spacing={1} direction={"row"}>
                                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                        <Typography>
                                            (4 reviews)
                                        </Typography>
                                    </Stack>
                                    <Typography sx={{
                                        fontSize: { xl: "2.2rem", lg: "2.2rem", md: "1.8rem", xs: "1.6rem"},
                                        fontWeight: "600"
                                    }}>
                                        ${price}
                                    </Typography>

                                    <Stack width={"100%"} direction={"row"} spacing={2} sx={{
                                        // display:"flex",
                                    }}>
                                        {products.map((item, index) => (
                                            <Button id={`size-${item.sizeData.sizeName}`} variant="text" sx={{
                                                fontSize: "1rem",
                                                border: "1px solid #795548",
                                                borderRadius: 0,
                                                width: "50%",
                                                bgcolor: `${size === `${item.sizeData.sizeName}` && colors.brown[500]}`,
                                                color: `${size === `${item.sizeData.sizeName}` ? colors.common.white : colors.brown[500]}`,
                                                "&:hover": {
                                                    bgcolor: `${size === `${item.sizeData.sizeName}` ? colors.brown[500] : colors.brown[100]}`,
                                                    color: `${size === `${item.sizeData.sizeName}` && colors.common.white}`,
                                                }
                                            }}
                                            onClick={handleChooseSize}
                                        >
                                            {item.sizeData.sizeName}
                                        </Button>
                                        ))}
                                        {/* <Button id="size-s" variant="text" sx={{
                                                fontSize: "1rem",
                                                border: "1px solid #795548",
                                                borderRadius: 0,
                                                width: "50%",
                                                bgcolor: `${size === 'S' && colors.brown[500]}`,
                                                color: `${size === 'S' ? colors.common.white : colors.brown[500]}`,
                                                "&:hover": {
                                                    bgcolor: `${size === 'S' ? colors.brown[500] : colors.brown[100]}`,
                                                    color: `${size === 'S' && colors.common.white}`,
                                                }
                                            }}
                                            onClick={handleChooseSize}
                                        >
                                            S
                                        </Button>
                                        <Button id="size-m"  sx={{
                                                fontSize: "1rem",
                                                border: "1px solid #795548",
                                                borderRadius: 0,
                                                width: "50%",
                                                bgcolor: `${size === 'M' && colors.brown[500]}`,
                                                color: `${size === 'M' ? colors.common.white : colors.brown[500]}`,
                                                "&:hover": {
                                                    bgcolor: `${size === 'M' ? colors.brown[500] : colors.brown[100]}`,
                                                    color: `${size === 'M' && colors.common.white}`,
                                                }
                                            }}
                                            onClick={handleChooseSize}
                                        >
                                            M
                                        </Button>
                                        <Button id="size-l"  variant="text" sx={{
                                                fontSize: "1rem",
                                                border: "1px solid #795548",
                                                borderRadius: 0,
                                                width: "50%",
                                                bgcolor: `${size === 'L' && colors.brown[500]}`,
                                                color: `${size === 'L' ? colors.common.white : colors.brown[500]}`,
                                                "&:hover": {
                                                    bgcolor: `${size === 'L' ? colors.brown[500] : colors.brown[100]}`,
                                                    color: `${size === 'L' && colors.common.white}`,
                                                }
                                            }}
                                            onClick={handleChooseSize}
                                        >
                                            L
                                        </Button> */}
                                    </Stack>

                                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                                        <IconButton size="small" sx={{
                                            border: "1px solid #ccc",
                                            borderRadius: 2
                                            }}
                                            onClick={handleMinusQty}
                                        >
                                            <RemoveIcon fontSize="small"/>
                                        </IconButton>
                                        <Typography fontSize={"1.2rem"}>
                                            {quantity}
                                        </Typography>
                                        <IconButton size="small" sx={{
                                            border: "1px solid #ccc",
                                            borderRadius: 2
                                            }}
                                            onClick={handlePlusQty}
                                        >
                                            <AddIcon fontSize="small"/>
                                        </IconButton>
                                    </Stack>

                                    <Box
                                        sx={{
                                            borderTop: "1px solid #ccc"
                                        }}
                                    />

                                    <Typography>
                                        Category: {products[0]?.productData.categoryData.categoryName}
                                    </Typography>

                                    <Box
                                        sx={{
                                            borderTop: "1px solid #ccc"
                                        }}
                                    />

                                    <Stack direction={"row"} display={"flex"} alignItems={"center"}>
                                        <Typography variant="h6" fontWeight={"600"}>
                                            SHARE:
                                        </Typography>

                                        <Stack direction={"row"}>
                                            <IconButton aria-label="facebook">
                                                <FacebookIcon />
                                            </IconButton>

                                            <IconButton aria-label="github">
                                                <InstagramIcon />
                                            </IconButton>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Button variant="contained" sx={{
                                            bgcolor: colors.brown[500],
                                            borderRadius: 0,
                                            "&:hover" : {
                                                bgcolor: colors.brown[400]
                                            }
                                        }}
                                        onClick={submitAddToCart}
                                        >
                                            ADD TO CART
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                
                <TabReviews item={products[0]?.productData} ratings={ratings}/>
               
            </Grid>
        </Box>
    )
}

export default ProductDetail;