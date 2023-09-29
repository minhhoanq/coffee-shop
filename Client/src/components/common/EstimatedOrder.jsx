import { Box, Button, Stack, Typography, colors } from "@mui/material";

const EstimatedOrder = () =>  {
    return (
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

            <Button variant="contained" size="large" sx={{
                color: "#fff",
                bgcolor: colors.brown[500],
                    "&:hover" : {
                        bgcolor: colors.brown[400]
                    }
            }}>
                Countinue to payment
            </Button>
        </Stack>
    )
}

export default EstimatedOrder;