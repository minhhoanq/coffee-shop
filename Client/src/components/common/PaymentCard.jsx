import { Box, Button, Stack, Typography, colors } from "@mui/material"
import { useCallback } from "react";
import { setDefaultAddress } from "../../api/userApi";

const PaymentCard = props => {
    // const item = props.item;

    // const handleSetDefaultAddress = useCallback(async() => {
    //     const id = item.id;
    //     const data = {
    //         id
    //     }
    //     const response = await setDefaultAddress(data);
    //     console.log(response)
    // })

    return (
        <Box>
            <Stack direction={"row"} justifyContent={"space-between"}>
                <Stack spacing={1}>
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                        <Typography variant="h6" 
                            sx={{
                                width: "300px",
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 1,
                                overflow: "hidden",
                            }}
                        >
                            Techcombank - Ngân hàng TMCP Kỹ thương Việt Nam
                        </Typography>

                        <Typography sx={{
                            color: "#999"
                        }}>
                            Đã kiểm tra
                        </Typography>

                        <Box
                            sx={{
                                backgroundColor: "#00bfa5",
                                color: "#fff",
                                padding: "0 5px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "2px"
                            }}
                        >
                            Mặc định
                        </Box>
                    </Stack>

                    <Typography color={"#999"}>
                        Họ và tên: Nguyễn Thị My
                    </Typography>

                    <Typography color={"#999"}>
                        Chi nhánh: Hoi so chinh/ Chi nhanh khac (Techcombank)
                    </Typography>
                </Stack>

                <Stack direction={"row"} height={"50%"} spacing={1}>
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
                        // onClick={handleSetDefaultAddress}
                    >
                        Set Default Bank Account
                    </Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default PaymentCard;