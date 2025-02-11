import { Box, Button, Stack, Typography, colors } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PaymentDetail from "./PaymentDetail";

const EstimatedOrder = props =>  {
    const formOrder = props.formOrder;

    return (
        <Stack spacing={2} sx={{
            border: "1px solid #ccc",
            borderRadius: "2px",
            p: 2
        }}>
            {/* <Stack spacing={1} width={"100%"}>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Typography>
                        Subtotal
                    </Typography>

                    <Typography>
                        ₫{formOrder.price || ""}
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
                        ₫{formOrder.transportfee || ""}
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
                        ₫{formOrder.price || ""}
                    </Typography>
                </Box>
                <Typography fontSize={"0.9rem"}>
                    Delivery fees and coupons will apply
                </Typography>
            </Stack> */}
            <PaymentDetail formOrder={formOrder}/>

            <Button variant="contained" size="large" sx={{
                    bgcolor: colors.brown[500],
                        "&:hover" : {
                            bgcolor: colors.brown[400]
                        }
                }}>
                <Link to={'/checkout'} style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    color: "#fff",
                    "&:hover" : {
                        color: "#fff"
                    },
                    width: "100%"
                }}> 
                    Countinue to payment
                </Link>
            </Button>
        </Stack>
    )
}

export default EstimatedOrder;