import { Box, Button, Checkbox, Icon, Radio, Stack, Typography } from "@mui/material";
import DiscountRoundedIcon from '@mui/icons-material/DiscountRounded';
import logo from "../../assets/images/logo.jpg"

const VoucherItem = props => {

    const item = props.item;

    const handleCheckVoucher = () => {
        
    }

    return (
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-around"} sx={{
            // border: "1px solid #ccc",
            // borderRadius: "2px"
        }}>
            <img src={"https://static.wixstatic.com/media/6c60c6_7e012018ea904d0283ddb88f0ca4eb2f~mv2.png"} style={{
                maxHeight: "100px",
                maxWidth: "100px"
            }}/>

            <Box width={"50%"}>
                <Typography variant="h5" >
                    {item.nameCoupons}
                </Typography>
                <Typography>
                    Đơn tối thiếu 349k Giảm tối đa ₫{item.maxAmount}
                </Typography>
            </Box>
        </Stack>
    )
}

export default VoucherItem;