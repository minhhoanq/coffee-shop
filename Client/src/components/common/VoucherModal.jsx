import {  Box, IconButton, Modal, Stack, TextField, Typography, InputAdornment, Button, colors, Radio } from "@mui/material"
import Paper from "./Paper";
import ClearIcon from '@mui/icons-material/Clear';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import VoucherItem from "./VoucherItem";
import { useEffect, useState } from "react";
import { getAllBillCoupons } from "../../api/couponsApi";

const VoucherModal = props => {
    const [coupons, setCoupons] = useState([]);

    // useEffect(() => {
    //     const getData = async () => {
    //         const getData = await getAllBillCoupons();
    //         setCoupons(getData.data);
    //     }
    //     getData();
    // },[])

    const handleCloseModal = () => {
        props.close(false);
    }

    return (
        <Modal
            open={props.open}
            // open={true}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Paper bgcolor={"#fff"}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        display: "flex",
                        justifyContent: "flex-end"
                    }}
                >
                    <IconButton onClick={handleCloseModal}>
                        <ClearIcon/>
                    </IconButton>
                </Box>
                <Stack>
                    <Typography fontSize={"1.8rem"}>
                        Shop Voucher
                    </Typography>
                    <Stack flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"} mt={2}>
                        <Typography>
                            Voucher Code
                        </Typography>
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
                        <Button variant="contained" size="large" sx={{
                            bgcolor: colors.green[700],
                            "&:hover" : {
                                bgcolor: colors.green[600]
                            }
                        }}>
                            APPLY
                        </Button>
                    </Stack>
                </Stack>
                
                <Stack mt={2} spacing={1} sx={{
                    height: "400px",
                    overflow: "auto"
                }}>
                    {coupons.map((item, index) => (
                        <Stack direction={"row"} justifyContent={"space-between"} key={index} sx={{
                            border: "1px solid #ccc",
                            borderRadius: "2px",
                        }}>
                            <VoucherItem item={item}/>
                            <Box display={"flex"} alignItems={"center"} justifyContent={"center"} width={"40px"}>
                                <input 
                                // disabled
                                    type="radio" 
                                    value={item.id} 
                                    name="voucher" 
                                    style={{
                                        height: "20px",
                                        width: "20px",
                                        // cursor: "not-allowed"
                                    }}
                                    onChange={e => props.couponsId(e.target.value)}/>
                            </Box>
                        </Stack>
                    ))}
                </Stack>

                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    mt: "30px"
                }}>
                    <Stack direction={"row"} spacing={2}>
                    <Button variant="outlined"
                        sx={{
                            // color: colors.brown[400],
                            color: colors.green[600],
                            border: `1px solid ${colors.green[600]}`,
                            "&:hover" : {
                                border: `1px solid ${colors.green[600]}`,
                                backgroundColor: colors.green[100],
                            }
                        }}
                        onClick={handleCloseModal}
                    >
                        Cancel
                    </Button>

                        <Button variant="contained"
                            sx={{
                                backgroundColor: colors.green[600],
                                color: "#fff",
                                "&:hover" : {
                                    backgroundColor: colors.green[500]
                                }
                            }}
                            type="submit"
                            // onSubmit={handleSubmit(handleSubmitAddAddress)}
                        >
                            Submit
                        </Button>
                    </Stack>
               </Box>
            </Paper>    
        </Modal>
    )
}

export default VoucherModal;