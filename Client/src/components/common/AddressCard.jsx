import { Box, Button, Stack, Typography, colors } from "@mui/material"

const AddressCard = () => {
    return (
        <Box >
            <Stack direction={"row"} justifyContent={"space-between"}>
                <Stack spacing={1}>
                    <Stack direction={"row"} alignItems={"center"}>
                        <Typography variant="h6">
                            Tran Minh Hoang
                        </Typography>

                        <div style={{
                            height: "100%",
                            width: "1px",
                            borderLeft: "1px solid #ccc",
                            margin: "0 10px"
                        }}/>

                        <Typography>
                            (+84) 941151376
                        </Typography>
                    </Stack>

                    <Typography color={"#999"}>
                        Số 12, Phố Nghĩa
                    </Typography>

                    <Typography color={"#999"}>
                        Phường Nghĩa Đô, Quận Cầu Giấy, Hà Nội
                    </Typography>

                    <Box sx={{
                        border: `1px solid ${colors.brown[400]}`,
                        width: "70px",
                        padding: "2px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: colors.brown[400]
                    }}>
                        Default
                    </Box>
                </Stack>

                <Stack>
                    <Button variant="text"
                        sx={{
                            color: colors.brown[400],
                            fontWeight: "600"
                        }}
                    >
                        Update
                    </Button>

                    <Button variant="outlined"
                        sx={{
                            color: colors.brown[400],
                            border: `1px solid ${colors.brown[400]}`,
                            "&:hover" : {
                                border: `1px solid ${colors.brown[400]}`,
                                backgroundColor: colors.brown[100],
                            }
                        }}
                    >
                        Set Default Address
                    </Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default AddressCard;