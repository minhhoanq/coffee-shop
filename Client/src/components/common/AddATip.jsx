import {  Box, Button, InputAdornment, Stack, TextField, Typography, colors } from "@mui/material";
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DiscountRoundedIcon from '@mui/icons-material/DiscountRounded';
import VoucherModal from "./VoucherModal";
import { useState } from "react";

const AddATip = props => {
    const [openModal, setModal] = useState(false);

    const handleShowVoucherModal = () => {
        setModal(!openModal);
    }

    return (
        <Stack spacing={2}>
                <VoucherModal
                    couponsId={e => props.couponsId(e)}
                    price={props.price}
                    open={openModal}
                    close={(close) => setModal(close)}
                />
                <Typography fontSize={"0.9rem"} fontWeight={"600"}>
                    Discount
                </Typography>

                <Stack spacing={2} direction={"row"} mt={2} sx={{
                    justifyContent: "space-between"
                }}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <DiscountRoundedIcon color="error"/>
                        <Typography variant="h6" sx={{
                            ml: 1
                        }}>
                            Shop Voucher
                        </Typography>
                    </Box>
                    <Button variant="contained" size="large" sx={{
                        bgcolor: colors.brown[500],
                        "&:hover" : {
                            bgcolor: colors.brown[400]
                        }
                    }}
                    onClick={handleShowVoucherModal}>
                        GET
                    </Button>
                </Stack>

                <TextField
                    id="input-with-icon-textfield"
                    placeholder="Add coupon or gift card"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocalOfferOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                    onChange={e => props.couponsId(e.target.value)}
                />
            </Stack>
    )
}

export default AddATip;