import { Autocomplete, Box, Button, IconButton, Modal, Stack, TextField, Typography, colors, createFilterOptions } from "@mui/material";
import axios from "axios";
import { createUserAddress, setDefaultAddress } from "../../api/userApi";

import ClearIcon from '@mui/icons-material/Clear';
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const categories = [
    {
        title: "Coffee",
        state: "1",
    },
    {
        title: "Milk Tea",
        state: "2",
    },
    {
        title: "Tea",
        state: "3",
    },
    {
        title: "Cake",
        state: "4",
    },
]

const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.title,
})

const ModalFilter = props => {

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
        reset,
    } = useForm({
        defaultValues: {
           id: "",
           name: "",
           category: "",
           price: "",
           sold: "",
        }
    });

    const handleCloseModal = () => {
        props.close();
    }

    const handleSubmitFilter = (data) => {
        console.log(data)
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
                    p: 4,
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
                <Typography variant="h4">
                    Filters Products
                </Typography>
                <Box 
                
                component={"form"}
                onSubmit={handleSubmit(handleSubmitFilter)}
                width={"100%"} sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}>
                    <Stack spacing={4} mt={10}>
                        <TextField label={`ID`} fullWidth
                            name={`id`} 
                            id={`id`}
                            inputProps={{
                                style: {
                                    height: "50px",
                                    padding: '0 10px',
                                }
                            }}
                            sx={{
                                bgcolor: colors.grey[200]
                            }}
                            {...register("id", 
                                // {
                                //     required: 'Không bỏ trống',
                                //     minLength: {
                                //         value: 1,
                                //         message: 'Chỉ nhập số, không nhập chữ cái hay ký tự đặc biệt'
                                //     }
                                // }
                            )
                        }
                        />
                        <TextField label={`Name`} fullWidth
                            name={`name`} 
                            id={`name`}
                            inputProps={{
                                style: {
                                    height: "50px",
                                    padding: '0 10px',
                                }
                            }}
                            sx={{
                                bgcolor: colors.grey[200]
                            }}
                            {...register("name", 
                                // {
                                //     required: 'Không bỏ trống',
                                //     minLength: {
                                //         value: 1,
                                //         message: 'Chỉ nhập số, không nhập chữ cái hay ký tự đặc biệt'
                                //     }
                                // }
                            )
                        }
                        />
                        <Autocomplete
                            fullWidth
                            id="filter-category"
                            options={categories}
                            getOptionLabel={(option) => option.title}
                            // onChange={(e, value) => props.category(value?.state ? value.state : "0")}
                            filterOptions={filterOptions}
                            // sx={{
                            //     width: { xl: "200px", lg: "200px", md: "200px", sm: "200px", xs: "60%"},
                            //     outline: "none"
                            // }}
                            size = "large"
                            renderInput={(params) => <TextField {...params} label="Categories" />}
                        />
                        <TextField label={`Price`} fullWidth
                            name={`price`} 
                            id={`price`}
                            inputProps={{
                                style: {
                                    height: "50px",
                                    padding: '0 10px',
                                }
                            }}
                            sx={{
                                bgcolor: colors.grey[200]
                            }}
                            {...register("price", 
                                // {
                                //     required: 'Không bỏ trống',
                                //     minLength: {
                                //         value: 1,
                                //         message: 'Chỉ nhập số, không nhập chữ cái hay ký tự đặc biệt'
                                //     }
                                // }
                            )
                        }
                        />
                        <TextField label={`Sold`} fullWidth
                            name={`sold`} 
                            id={`sold`}
                            inputProps={{
                                style: {
                                    height: "50px",
                                    padding: '0 10px',
                                }
                            }}
                            sx={{
                                bgcolor: colors.grey[200]
                            }}
                            {...register("sold", 
                                // {
                                //     required: 'Không bỏ trống',
                                //     minLength: {
                                //         value: 1,
                                //         message: 'Chỉ nhập số, không nhập chữ cái hay ký tự đặc biệt'
                                //     }
                                // }
                            )
                        }
                        />
                    </Stack>
                    <Button type="submit" fullWidth variant="contained" size="large" sx={{
                            bgcolor: colors.blue[700],
                            "&:hover" : {
                                bgcolor: colors.blue[600]
                            }
                        }}>
                            Apply changes
                    </Button>
                </Box>
            </Stack>
        </Modal>
    )
}

export default ModalFilter;