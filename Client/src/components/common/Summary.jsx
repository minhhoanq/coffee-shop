import { Box, Button, InputAdornment, Link, Stack, TextField, Typography } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

const Summary = () => {
    return (
        <Stack spacing={4}>
            <Stack>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography fontSize={"0.9rem"} fontWeight={"600"}>
                        HOW TO GET IT
                    </Typography>
                    <Button color="error">
                        Edit
                    </Button>
                </Stack>

                <Stack spacing={1} mt={2}>
                    <Link to={'/'} style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        color: "rgba(0, 0, 0, 0.8)",
                        "&:hover" : {
                            color: "#000"
                        }
                    }}>
                        <LocationOnOutlinedIcon/>
                        Pickup: 1026 SW Harvey Milk Street
                    </Link>

                    <Link to={'/'} style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        color: "rgba(0, 0, 0, 0.8)",
                        textDecoration: "none"
                    }}>
                        <AccessTimeOutlinedIcon/>
                        Today at 8:00 am
                    </Link>
                </Stack>
            </Stack>

            <Stack spacing={2}>
                <Typography fontSize={"0.9rem"} fontWeight={"600"}>
                    ADD A TIP
                </Typography>

                <Stack direction={"row"} mt={2} sx={{
                    justifyContent: "space-between"
                }}>
                    <Button sx={{
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        bgcolor: "rgba(0, 0, 0, 0.09)",
                        color: "black"
                    }}>
                        <Typography fontSize={"1.1rem"} fontWeight={"600"}>
                            10%
                        </Typography>
                        <Typography fontSize={"0.8rem"}>
                            $1.33
                        </Typography>
                    </Button>
                    <Button sx={{
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        bgcolor: "rgba(0, 0, 0, 0.09)",
                        color: "black"
                    }}>
                        <Typography fontSize={"1.1rem"} fontWeight={"600"}>
                            15%
                        </Typography>
                        <Typography fontSize={"0.8rem"}>
                            $1.33
                        </Typography>
                    </Button>

                    <Button sx={{
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        bgcolor: "rgba(0, 0, 0, 0.09)",
                        color: "black"
                    }}>
                        <Typography fontSize={"1.1rem"} fontWeight={"600"}>
                            20%
                        </Typography>
                        <Typography fontSize={"0.8rem"}>
                            $1.33
                        </Typography>
                    </Button>

                    <Button sx={{
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        bgcolor: "rgba(0, 0, 0, 0.09)",
                        color: "black",
                    }}>
                        <Typography fontSize={"1.1rem"} fontWeight={"600"}>
                            ...
                        </Typography>
                        <Typography fontSize={"0.8rem"}>
                            $1.33
                        </Typography>
                    </Button>
                </Stack>

                <TextField
                    id="input-with-icon-textfield"
                    placeholder="Add coupon or gift card"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocalOfferOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>

            <Stack spacing={2}>
                <Stack spacing={1} width={"100%"}>
                    <Box sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <Typography>
                            Subtotal
                        </Typography>
    
                        <Typography>
                            $13.25
                        </Typography>
                    </Box>
    
                    <Box sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <Typography>
                            Estimated taxes
                        </Typography>
    
                        <Typography>
                            $0.00
                        </Typography>
                    </Box>
    
                    <Box sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <Typography>
                            Tip (20%)
                        </Typography>
    
                        <Typography>
                            $2.65
                        </Typography>
                    </Box>
                    <Box sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                        <Typography 
                            fontWeight={"600"}
                        >
                            Estimated order total
                        </Typography>
    
                        <Typography
                            fontWeight={"600"}
                        >
                            $15.90
                        </Typography>
                    </Box>
                    <Typography fontSize={"0.9rem"}>
                        Additional taxes and fees will be calculated at checkout
                    </Typography>
                </Stack>

                <Button size="large" sx={{
                    bgcolor:"#bb955e",
                    color: "#fff",
                    borderRadius: 0
                }}>
                    Countinue to payment
                </Button>
            </Stack>
        </Stack>
    )
}

export default Summary;