import { Autocomplete, Box, Button, IconButton, Modal, Stack, TextField, Typography, colors, createFilterOptions } from "@mui/material";
import axios from "axios";
import { createUserAddress, setDefaultAddress } from "../../api/userApi";

import ClearIcon from '@mui/icons-material/Clear';
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ModalAddProduct = props => {


    const handleCloseModal = () => {
        props.close();
    }

    return (
        <Modal
            open={props.open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Stack
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 500,
                    minHeight: 200,
                    height: "550px",
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    p: 2,
                    outline: "none",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}
                >
                    <IconButton onClick={handleCloseModal}>
                        <ClearIcon/>
                    </IconButton>
                </Box>
                a
            </Stack>
        </Modal>
    )
}

export default ModalAddProduct;