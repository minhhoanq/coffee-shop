import { Button, Stack, Typography, colors } from "@mui/material"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAllPaymentMethos } from "../../api/paymentMethodsApi"

const PaymentMethods = () => {
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [tab, setTab] = useState('Bank Card');

    useEffect(() => {
        const getData = async() => {
            const getPaymentMethods = await getAllPaymentMethos();
            setPaymentMethods(getPaymentMethods.data);
        }

        getData();
    },[])

    return (
        <Stack justifyContent={"space-between"} sx={{
            height: { xl: "270px", lg: "270px", md: "auto", xs: "auto"}
        }}>
            <Stack>
                <Stack spacing={2} direction={"row"} justifyContent={"flex-start"} alignItems={"center"}
                    sx={{
                        height: "100px"
                    }}
                >
                    <Typography variant="h6">
                        Payment Methods
                    </Typography>
                    {paymentMethods.map((item, index) => (
                        <Button key={index} variant={tab === `${item.nameMethod}` ? "contained" : "outlined"}
                        sx={{
                            color: tab === `${item.nameMethod}` ? colors.common.white :colors.brown[400],
                            bgcolor: tab === `${item.nameMethod}` ? colors.brown[500] : "" ,
                            border: `1px solid ${colors.brown[400]}`,
                            "&:hover" : {
                                border: `1px solid ${colors.brown[400]}`,
                                backgroundColor: tab === `${item.nameMethod}` ? colors.brown[400] : colors.brown[100],
                            }
                        }}
                        onClick={() => setTab(`${item.nameMethod}`)}
                        >
                        {item.nameMethod}
                    </Button>
                    ))}
                    {/* <Button variant={tab === 'payment-upon-delivery' ? "contained" : "outlined"}
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
                    </Button> */}
                </Stack>
                {tab === 'Bank Card' ? <BankCardTab/> : <Typography sx={{
                    fontSize: { xl: "1.2rem", lg: "1.2rem", md: "1.2rem", xs: "1.2rem"}
                }}>
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