import {  Box, Modal, Paper, Stack } from "@mui/material"

const VoucherModal = props => {
    
    // const handleCloseModal = () => {
    //     props.close(false);
    // }
    return (
        <Modal
            open={props.open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: "relative"
            }}>
                <Paper>
                    children
                </Paper>
            </Box>
        </Modal>
    )
}

export default VoucherModal;