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

const ProductDetail = () => {
    const [products, setProducts] = useState([]);
    const [ratings, setRatings] = useState([]);

    const { slug } = useParams();

    const getDataBySlug = async() => {
        const result = await getProductDetailBySlug(slug);

        setProducts(result.dataDetailProduct);
        // setPrice(result.dataDetailProduct[0]?.productData.price);
    }

    const getRatingsProductData = async() => {
        const result = await getAllRatingsProduct(slug);
        setRatings(result.ratingsData)
    }

    useEffect(() => {
        getDataBySlug();
        getRatingsProductData();
    },[]);

    console.log(products[0]?.id)

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
                                        ${products[0]?.productData.price}
                                    </Typography>

                                    <Stack width={"100%"} direction={"row"} spacing={2} sx={{
                                        // display:"flex",
                                    }}>
                                        <Button variant="text" sx={{
                                            fontSize: "1rem",
                                            // bgcolor: colors.brown[500],
                                            color: colors.brown[500],
                                            border: "1px solid #795548",
                                            borderRadius: 0,
                                            width: "50%"
                                        }}>S</Button>
                                        <Button sx={{
                                            fontSize: "1rem",
                                            // bgcolor: colors.brown[500],
                                            color: colors.brown[500],
                                            border: "1px solid #795548",
                                            borderRadius: 0,
                                            width: "50%"
                                        }}>M</Button>
                                        <Button variant="text" sx={{
                                            fontSize: "1rem",
                                            color: colors.brown[500],
                                            border: "1px solid #795548",
                                            borderRadius: 0,
                                            width: "50%",
                                        }}>L</Button>
                                    </Stack>

                                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                                        <IconButton size="small" sx={{
                                            border: "1px solid #ccc",
                                            borderRadius: 2
                                        }}>
                                            <RemoveIcon fontSize="small"/>
                                        </IconButton>
                                        <Typography fontSize={"1.2rem"}>
                                            1
                                        </Typography>
                                        <IconButton size="small" sx={{
                                            border: "1px solid #ccc",
                                            borderRadius: 2
                                        }}>
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
                                            borderRadius: 0
                                        }}>
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