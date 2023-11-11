import { Box, Grid, IconButton, Stack, Typography } from "@mui/material"
import AddressGetIt from "../components/common/AddressGetIt";
import Paypal from "../components/common/Paypal";
import AddATip from "../components/common/AddATip";
import EstimatedOrder from "../components/common/EstimatedOrder";

import logo from "../assets/images/logo.jpg"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Checkout = () => {
    return (
        <Box width={"100%"}>
            
            <Grid container 
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Grid item xs={8} >
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
                    <Typography fontSize={"1.8rem"} fontWeight={600}>
                        Checkout
                    </Typography>
                    <Stack direction={"row"} width={"100%"} justifyContent={"space-between"} mt={5}>
                        <Box width={"100%"}>
                            <Box width={"100%"} sx={{
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <Paypal/>
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
                                <EstimatedOrder/>
                            </Stack>
                        </Grid>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Checkout;