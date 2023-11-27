import { Autocomplete, Box, Button, IconButton, Modal, Stack, TextField, Typography, colors, createFilterOptions } from "@mui/material";
// import axios from "axios";
// import { createUserAddress, setDefaultAddress } from "../../api/userApi";

import ClearIcon from '@mui/icons-material/Clear';
import { Controller, useForm } from "react-hook-form";
// import { useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";


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

const ModalFilterUsers = props => {

    const {
        register,
        control,
        handleSubmit,
        // formState: { errors, isDirty },
        reset,
    } = useForm(
    );

    const handleCloseModal = () => {
        props.close();
    }

    const handleSubmitFilter = (data) => {
        // console.log(data)
        props.data(data)
        props.close()
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
                    <Stack spacing={4} mt={10} sx={{
                        height: "65vh",
                        overflowY: "auto"
                    }}>
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

                        <Stack direction={"row"} spacing={2}>
                            <TextField label={`First name`} fullWidth
                                name={`firstname`} 
                                id={`firstname`}
                                inputProps={{
                                    style: {
                                        height: "50px",
                                        padding: '0 10px',
                                    }
                                }}
                                sx={{
                                    bgcolor: colors.grey[200]
                                }}
                                {...register("firstname", 
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
                            <TextField label={`Last name`} fullWidth
                                name={`lastname`} 
                                id={`lastname`}
                                inputProps={{
                                    style: {
                                        height: "50px",
                                        padding: '0 10px',
                                    }
                                }}
                                sx={{
                                    bgcolor: colors.grey[200]
                                }}
                                {...register("lastname", 
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

                        <TextField label={`Username`} fullWidth
                            name={`username`} 
                            id={`username`}
                            inputProps={{
                                style: {
                                    height: "50px",
                                    padding: '0 10px',
                                }
                            }}
                            sx={{
                                bgcolor: colors.grey[200]
                            }}
                            {...register("username", 
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

                        <Controller
                            control={control}
                            name="sex"
                            render={({ field: {onChange, value} }) =>  (
                                <Autocomplete
                                    fullWidth
                                    id="sex"
                                    name="sex"
                                    options={sexs}
                                    getOptionLabel={(option) => option.title}
                                    filterOptions={filterOptions}
                                    onChange={(event, values) => {
                                        onChange(values);
                                    }}
                                    size = "large"
                                    renderInput={(params) => <TextField {...params} label="Sexs" onChange={onChange}/>}
                                />
                            )}
                        />

                        <TextField label={`Email`} fullWidth
                            name={`email`} 
                            id={`email`}
                            inputProps={{
                                style: {
                                    height: "50px",
                                    padding: '0 10px',
                                }
                            }}
                            sx={{
                                bgcolor: colors.grey[200]
                            }}
                            {...register("email", 
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

                        <TextField label={`Phone number`} fullWidth
                            name={`phone`} 
                            id={`phone`}
                            inputProps={{
                                style: {
                                    height: "50px",
                                    padding: '0 10px',
                                }
                            }}
                            sx={{
                                bgcolor: colors.grey[200]
                            }}
                            {...register("phone", 
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

export default ModalFilterUsers;