import { Box, Button, Stack, Typography, colors } from "@mui/material";
import PaymentCard from "../components/common/PaymentCard";

const Payment = () => {
    return (
        <Box 
            height={"100%"} 
            bgcolor={"#f5f5f5"}
            padding={"40px"} 
            display={"flex"} 
            flexDirection={"column"}
            justifyContent={"space-between"}
        >
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography variant="h5">
                    My Bank
                </Typography>

                <Button variant="contained"
                    sx={{
                        bgcolor: colors.brown[500],
                        "&:hover" : {
                            bgcolor: colors.brown[400],
                        }
                    }}
                >
                    Add Bank Account
                </Button>
            </Stack>
            <Box width={"100%"} height={"90%"} bgcolor={"#fff"}
                sx={{
                    boxShadow: "rgba(0, 0, 0, 0.2) 0rem 0.25rem 0.5rem",
                    padding: "50px"
                }}
            >
                <Stack spacing={"40px"}>
                    <PaymentCard/>
                    <PaymentCard/>
                </Stack>
            </Box>
        </Box>
    )
}

export default Payment;