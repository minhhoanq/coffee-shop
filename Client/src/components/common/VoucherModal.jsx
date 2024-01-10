import {  Box, IconButton, Modal, Stack, TextField, Typography, InputAdornment, Button, colors } from "@mui/material"
import Paper from "./Paper";
import ClearIcon from '@mui/icons-material/Clear';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

const VoucherModal = props => {
    
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
            <Paper>
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
                        />
                        <Button variant="contained" size="large" sx={{
                            bgcolor: colors.brown[500],
                            "&:hover" : {
                                bgcolor: colors.brown[400]
                            }
                        }}>
                            APPLY
                        </Button>
                    </Stack>
                </Stack>
                
                <Box mt={2} sx={{
                    height: "400px",
                    bgcolor: "#ccc"
                }}>

                </Box>

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
                            color: colors.brown[400],
                            border: `1px solid ${colors.brown[400]}`,
                            "&:hover" : {
                                border: `1px solid ${colors.brown[400]}`,
                                backgroundColor: colors.brown[100],
                            }
                        }}
                        onClick={handleCloseModal}
                    >
                        Cancel
                    </Button>

                        <Button variant="contained"
                            sx={{
                                backgroundColor: colors.brown[500],
                                color: "#fff",
                                "&:hover" : {
                                    backgroundColor: colors.brown[400]
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