import { Box, Button, Grid, IconButton, Rating, Stack, Typography, colors } from "@mui/material";
import Banner from "../components/common/Banner";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TabReviews from "../components/common/TabReviews";

const ProductDetail = () => {
    return (
        <Box>
            <Banner/>
            
            <Grid container
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Grid item xs={8} mt={5} height={"100%"}>
                    <Grid item sx={{
                            display: "flex",
                            flexDirection: { xl: "row", lg: "row", md: "column", xs: "column"},
                            margin: "auto"
                        }}>
                            <Grid xs={6} sx={{
                            }}>
                                <img src="https://inlysugiare.vn/wp-content/uploads/2020/05/ly-ca-phe-bac-xiu-da.jpg" alt="" height={"100%"}/>
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
                                            Bạc xỉu
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
                                            $12
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
                                            Category: Coffee
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

                        <Grid
                    mt={5}
                    container 
                    width={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}>
                    
                    </Grid>
                </Grid>

               <TabReviews/>
            </Grid>
        </Box>
    )
}

export default ProductDetail;