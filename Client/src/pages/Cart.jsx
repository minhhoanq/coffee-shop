import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import ItemCardHorizontal from '../components/common/ItemCarHorizontal';
import AddressGetIt from '../components/common/AddressGetIt';
import AddATip from '../components/common/AddATip';
import EstimatedOrder from '../components/common/EstimatedOrder';

const Cart = () => {
    return (
        <Box 
            display={"flex"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            minHeight={"80vh"}
        >
            <Grid container xs={8} width={"100%"}>
                <Typography variant='h4' fontWeight={"600"}>
                    Your cart
                </Typography>
                <Grid item container xs={12} justifyContent={"space-between"} mt={4} spacing={2}
                >
                    <Grid item lg={7} xs={12}>
                        <Typography fontWeight={"600"} fontSize={"0.9rem"} color={"GrayText"}>
                            YOUR ORDER (1 ITEM)
                        </Typography>
                        <Stack spacing={2} mt={2}>
                            <ItemCardHorizontal/>
                        </Stack>
                        <Button variant='outlined' fullWidth size='large'
                            sx={{
                                mt: 2,
                                borderRadius:"0px",
                                color: "black",
                                border: "1px solid #000",
                                "&:hover" : {
                                    border: "1px solid #000",
                                    bgcolor: "rgba(0, 0, 0, 0.09)"
                                }
                            }}
                        >
                            Add more items
                        </Button>
                    </Grid>

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
                </Grid>
            </Grid>
        </Box>
    )
}

export default Cart;