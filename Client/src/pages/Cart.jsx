import { Box, Grid, Stack, Typography } from '@mui/material'
import ItemCardHorizontal from '../components/common/ItemCarHorizontal';

const Cart = () => {
    return (
        <Box 
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Grid container xs={10} width={"100%"}>
                <Typography variant='h4' fontWeight={"600"}>
                    Your cart
                </Typography>
                <Grid item container xs={12} justifyContent={"space-between"} mt={4}>
                    <Grid item xs={7}>
                        <Typography fontWeight={"600"} fontSize={"1rem"} color={"GrayText"}>
                            YOUR ORDER (1 ITEM)
                        </Typography>
                        <Stack spacing={2} mt={2}>
                            <ItemCardHorizontal/>
                        </Stack>
                    </Grid>

                    <Grid item xs={4} bgcolor={"Red"}>
                        4
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Cart;