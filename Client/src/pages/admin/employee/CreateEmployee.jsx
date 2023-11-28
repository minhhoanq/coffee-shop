import { useEffect, useState } from "react";

import { Autocomplete, Box, Button, CircularProgress, Stack, TextField, Typography, colors, createFilterOptions } from "@mui/material";
import Breadcrumbs from "../../../components/common/Breadcrumbs";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import ModalCodeRegistration from "../../../components/common/ModalCodeRegistration";
import { registerActions } from "../../../redux/asyncActions/authActions";
import UserForm from "../../../components/common/UserForm";

const sexs = [
    {
        title: "Male",
        state: "1",
    },
    {
        title: "Female",
        state: "2",
    },
    {
        title: "Others",
        state: "3",
    },
]


const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.title,
})

const CreateEmployee = () => {
    const dispatch = useDispatch();
    const [modalCode, setModalCode] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const {
        control,
        register,
        handleSubmit,
    } = useForm();

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const handleCreateUser = async(data) => {
        // console.log(data)
        const response = await dispatch(registerActions(data));
        const reqStatus = response.meta.requestStatus;
        // console.log(response);
        if(reqStatus === 'fulfilled') {
            setModalCode(true)
        } else if (reqStatus === 'rejected') {
            console.log(response.payload.response.data.msg);
            Swal.fire('', response.payload.response.data.msg, 'error')
        }
        // setModalCode(true)
    }

    return (
        <Box sx={{
            p: "40px",
            backgroundColor: "#f8f9fa",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
        }}>
            <ModalCodeRegistration
                open={modalCode}
                close={(close) => setModalCode(close)}
                isLoggedIn={(isLoggedIn) => setIsLoggedIn(isLoggedIn)}
            />
            <UserForm submit={(data) => handleCreateUser(data)}/>
        </Box>
    )
}

export default CreateEmployee;