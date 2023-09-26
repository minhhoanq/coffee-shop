import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import ItemCardHorizontal from '../components/common/ItemCarHorizontal';
import Summary from '../components/common/Summary';

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
                <Grid item container xs={12} justifyContent={"space-between"} mt={4}>
                    <Grid item xs={7}>
                        <Typography fontWeight={"600"} fontSize={"0.9rem"} color={"GrayText"}>
                            YOUR ORDER (1 ITEM)
                        </Typography>
                        <Stack spacing={2} mt={2}>
                            <ItemCardHorizontal/>
                            <ItemCardHorizontal/>
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

                    <Grid item xs={4}>
                        <Summary/>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Cart;