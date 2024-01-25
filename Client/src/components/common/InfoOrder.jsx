import { Box, Stack, Typography } from "@mui/material"

const InfoOrder = () => {
    return (
        <Box>
            <Stack spacing={1}>
                <Stack spacing={1} direction={"row"} alignItems={"center"}>
                    <Typography variant="h6" fontWeight={600}>
                        Name: 
                    </Typography>
                    <Typography variant="h6">
                        Tran Minh Hoang 
                    </Typography>
                </Stack>
                <Stack spacing={1} direction={"row"} alignItems={"center"}>
                    <Typography variant="h6" fontWeight={600}>
                        Delivery address: 
                    </Typography>
                    <Typography variant="h6">
                        Tran Minh Hoang 
                    </Typography>
                </Stack>
                <Stack spacing={1} direction={"row"} alignItems={"center"}>
                    <Typography variant="h6" fontWeight={600}>
                        Phone number: 
                    </Typography>
                    <Typography variant="h6">
                        0941151376 
                    </Typography>
                </Stack>
                <Stack spacing={1} direction={"row"} alignItems={"center"}>
                    <Typography variant="h6" fontWeight={600}>
                        Payment method: 
                    </Typography>
                    <Typography variant="h6">
                        Tran Minh Hoang 
                    </Typography>
                </Stack>
                <Stack spacing={1} direction={"row"} alignItems={"center"}>
                    <Typography variant="h6" fontWeight={600}>
                        Transport fee: 
                    </Typography>
                    <Typography variant="h6">
                        Tran Minh Hoang 
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

export default InfoOrder;