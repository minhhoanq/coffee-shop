import { Box, Button, Stack, Typography, colors } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const EstimatedOrder = props =>  {
    const items = props.items;
    let priceTotal = 0;

    useEffect(() => {
        items?.forEach(element => {
            priceTotal += element.price
        });
        props.price(priceTotal)
    }, [items]);

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
                        ${priceTotal}
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
                        ${priceTotal}
                    </Typography>
                </Box>
                <Typography fontSize={"0.9rem"}>
                    Additional taxes and fees will be calculated at checkout
                </Typography>
            </Stack>

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