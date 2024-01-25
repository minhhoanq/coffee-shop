import { Box, Stack, Typography } from "@mui/material";

const PaymentDetail = props => {
    const formOrder = props.formOrder || undefined;

    return (
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
                        {/* ₫{formOrder.price || ""} */}
                    </Typography>
                </Box>

                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Typography>
                        Transport fee
                    </Typography>

                    <Typography>
                        {/* ₫{formOrder.transportfee || ""} */}
                    </Typography>
                </Box>

                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Typography>
                        Total discount amount
                    </Typography>

                    <Typography>
                        -₫10000
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
                        {/* ₫{formOrder.price || ""} */}
                    </Typography>
                </Box>
                <Typography fontSize={"0.9rem"}>
                    Delivery fees and coupons will apply
                </Typography>
            </Stack>
    )
}

export default PaymentDetail;