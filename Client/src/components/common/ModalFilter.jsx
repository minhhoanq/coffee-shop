import { Autocomplete, Box, Button, IconButton, Modal, Stack, TextField, Typography, colors, createFilterOptions } from "@mui/material";
import axios from "axios";
import { createUserAddress, setDefaultAddress } from "../../api/userApi";

import ClearIcon from '@mui/icons-material/Clear';
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ModalFilter = props => {


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
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: 400,
                    minHeight: "100vh",
                    height: "550px",
                    bgcolor: 'background.paper',
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

export default ModalFilter;