import { Button, Stack, Typography, colors } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom";

const PaymentMethods = () => {

    const [tab, setTab] = useState('bank-card');

    return (
        <Stack height={"60%"} justifyContent={"space-between"}>
            <Stack>
                <Stack spacing={2} direction={"row"} justifyContent={"flex-start"} alignItems={"center"}
                    sx={{
                        height: "100px"
                    }}
                >
                    <Typography variant="h6">
                        Payment Methods
                    </Typography>
                    <Button variant={tab === 'bank-card' ? "contained" : "outlined"}
                        sx={{
                            color: tab === 'bank-card' ? colors.common.white :colors.brown[400],
                            bgcolor: tab === 'bank-card' ? colors.brown[500] : "" ,
                            border: `1px solid ${colors.brown[400]}`,
                            "&:hover" : {
                                border: `1px solid ${colors.brown[400]}`,
                                backgroundColor: tab === 'bank-card' ? colors.brown[400] : colors.brown[100],
                            }
                        }}
                        onClick={() => setTab('bank-card')}
                        >
                        Bank Card
                    </Button>
                    <Button variant={tab === 'payment-upon-delivery' ? "contained" : "outlined"}
                        sx={{
                            color: tab === 'payment-upon-delivery' ? colors.common.white :colors.brown[400],
                            bgcolor: tab === 'payment-upon-delivery' ? colors.brown[500] : "" ,
                            border: `1px solid ${colors.brown[400]}`,
                            "&:hover" : {
                                border: `1px solid ${colors.brown[400]}`,
                                backgroundColor: tab === 'payment-upon-delivery' ? colors.brown[400] : colors.brown[100],
                            }
                        }}
                        onClick={() => setTab('payment-upon-delivery')}
                        >
                        Payment upon delivery
                    </Button>
                </Stack>
                {tab === 'bank-card' ? <BankCardTab/> : <Typography>
                    Thanh toán khi nhận hàng
                    Phí thu hộ: ₫0 VNĐ. Ưu đãi về phí vận chuyển (nếu có) áp dụng cả với phí thu hộ.
                </Typography>}
                
            </Stack>

            <Typography fontSize={"1.2rem"}>
                Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo <Link style={{
                    color: colors.blue[600]
                }}>Điều khoản WoflShop</Link>
            </Typography>
        </Stack>
    )
}

export const BankCardTab = () => {
    return (
        <>Bank Card</>
    )
}

export default PaymentMethods;