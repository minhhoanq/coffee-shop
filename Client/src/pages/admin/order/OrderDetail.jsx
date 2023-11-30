import { Box, Stack, Typography } from "@mui/material";
import Breadcrumbs from "../../../components/common/Breadcrumbs";

const OrderDetail = () => {

    return (
        <Box sx={{
            p: "40px",
            backgroundColor: "#f8f9fa",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
        }}>
            <Stack>
                <Typography variant="h6">
                    <Breadcrumbs/>
                </Typography>

                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}  mt={2}>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                        <Typography variant="h4">
                            Product Detail
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Box mt={4}
                sx={{
                height: "600px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 10px 0 rgba(0,0,0,.15)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "30px",
                position: "relative"
                }}
            >
                aaa
            </Box>
        </Box>
    )
}

export default OrderDetail;