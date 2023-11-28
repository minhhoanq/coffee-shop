import { useEffect, useState } from "react";

import { Autocomplete, Box, Button, CircularProgress, Stack, TextField, TextareaAutosize, Typography, colors, createFilterOptions } from "@mui/material";
import Breadcrumbs from "../../../components/common/Breadcrumbs";
import { Controller, useForm } from "react-hook-form";
import { createProduct } from "../../../api/productApi";
import { useDispatch, useSelector } from "react-redux";
import { createProductAction } from "../../../redux/asyncActions/productActions";
import Swal from "sweetalert2";
import { fileToBase64 } from "../../../utils/helpers";

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
    const isFetching = useSelector(state => state.product.isPending);

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

    const handleCreateProduct = async(data) => {
        console.log(data)
        // const formData = new FormData();
        // if(data.image.length > 0) formData.append('image', data.image[0])
        // delete data.image
        
        // for(let i of Object.entries(data)) formData.append(i[0], i[1])

        // const response = await dispatch(createProductAction(formData));

        // if(response.meta.requestStatus === 'fulfilled') {
        //     Toast.fire({
        //         icon: 'success',
        //         title: response.payload.data.mes,
        //     }).then(() => {
        //         window.location.reload(true);
        //     })
        // }

        // if(response.meta.requestStatus === 'rejected') {
        //     Toast.fire({
        //         icon: 'error',
        //         title: 'Lỗi! Vui lòng thử lại sau.',
        //     })
        // }
    }

    return (
        <Box sx={{
            p: "40px",
            backgroundColor: "#f8f9fa",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
        }}>
            <Stack>
                <Typography variant="h6">
                    <Breadcrumbs/>
                </Typography>

                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}  mt={2}>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                        <Typography variant="h4">
                            Create new employees
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Box mt={4}
            component={"form"} onSubmit={handleSubmit(handleCreateProduct)} 
            sx={{
                width: "100%",
                // height: "600px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 10px 0 rgba(0,0,0,.15)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "30px",
                position: "relative"
            }}>
                <Box>
                    <Stack spacing={4} >
                        <TextField label={`Username`} fullWidth
                            name={`username`} 
                            id={`username`}
                            inputProps={{
                                style: {
                                    height: "50px",
                                    padding: '0 10px',
                                    backgroundColor: "#f5f5f5",
                                }
                            }}
                            {...register("username")}
                        />

                        <Stack direction={"row"} spacing={2}>
                            <TextField label={`First name`} fullWidth
                                name={`firstname`} 
                                id={`firstname`}
                                inputProps={{
                                    style: {
                                        height: "50px",
                                        padding: '0 10px',
                                        backgroundColor: "#f5f5f5"
                                    }
                                }}
                                {...register("firstname")}

                            />
                            
                            <TextField label={`Last name`} fullWidth
                                name={`lastname`} 
                                id={`lastname`}
                                inputProps={{
                                    style: {
                                        height: "50px",
                                        padding: '0 10px',
                                        backgroundColor: "#f5f5f5"
                                    }
                                }}
                                {...register("lastname")}
                            />
                        </Stack>

                        <Stack direction={"row"} spacing={2}>
                            <Controller
                                control={control}
                                name="sex"
                                render={({ field: {onChange, value} }) =>  (
                                    <Autocomplete
                                        fullWidth
                                        id="sex"
                                        name="sex"
                                        sx={{
                                            backgroundColor: "#f5f5f5"
                                        }}
                                        options={sexs}
                                        getOptionLabel={(option) => option.title}
                                        filterOptions={filterOptions}
                                        onChange={(event, values) => {
                                            onChange(values.state);
                                        }}
                                        size = "large"
                                        renderInput={(params) => <TextField {...params} label="Sex" onChange={onChange}/>}
                                    />
                                )}
                            />

                            {/* <Controller
                                control={control}
                                name="sizeId"
                                render={({ field: {onChange, value} }) =>  (
                                    <Autocomplete
                                        fullWidth
                                        id="sizeId"
                                        name="sizeId"
                                        sx={{
                                            backgroundColor: "#f5f5f5"
                                        }}
                                        options={sizes}
                                        getOptionLabel={(option) => option.title}
                                        filterOptions={filterOptions}
                                        onChange={(event, values) => {
                                            onChange(values.state);
                                        }}
                                        size = "large"
                                        renderInput={(params) => <TextField {...params} label="Size" onChange={onChange}/>}
                                    />
                                )}
                            /> */}
                        </Stack>

                        {/* <Box>
                            <label htmlFor="image" style={{
                                cursor: "pointer"
                            }}>
                                <Box width={"100%"}
                                    sx={{
                                        border: "1px dashed rgb(187, 195, 203)",
                                        
                                        height: "200px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        p: 2,
                                        flexDirection: "column",
                                        "&:hover" : {
                                            border: "1px dashed #007bff",
                                        }
                                    }}
                                >
                                    <img 
                                        height={"80px"} 
                                        width={"150px"} 
                                        src="https://www.iav.com/app/uploads/2019/01/LM_prod_life_cycle_icon_16_9.png"
                                    />
                                    <Stack alignItems={"center"} mt={1}>
                                        <Typography variant="h6">
                                            Drop your file here, or click to brower
                                        </Typography>
                                        <Typography color={"#999"}>
                                            Max size 5 MB
                                        </Typography>
                                        <Typography color={"#999"}>
                                            Support image/png, image/jpeg, image/jpg
                                        </Typography>
                                    </Stack>
                                </Box>
                            </label>

                            <input id="image" name="image" type="file" hidden {...register('image')}/>
                        </Box>
                        {preview.image && 
                        <Box fullWidth sx={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <img height={"300px"} src={preview.image} alt="image"/>
                        </Box>} */}

                        <TextField label={`Email`} fullWidth
                            name={`email`} 
                            id={`email`}
                            inputProps={{
                                style: {
                                    height: "50px",
                                    padding: '0 10px',
                                    backgroundColor: "#f5f5f5"
                                }
                            }}
                            {...register("email")}

                        />
                        
                        <TextField label={`Phone number`} fullWidth
                            name={`phone`} 
                            id={`phone`}
                            inputProps={{
                                style: {
                                    height: "50px",
                                    padding: '0 10px',
                                    backgroundColor: "#f5f5f5"
                                }
                            }}
                            {...register("phone")}
                        />

                        <Stack direction={"row"} spacing={2}>
                            <TextField label={`Password`} fullWidth
                                name={`password`} 
                                id={`password`}
                                inputProps={{
                                    style: {
                                        height: "50px",
                                        padding: '0 10px',
                                        backgroundColor: "#f5f5f5"
                                    }
                                }}
                                {...register("password")}

                            />
                            
                            <TextField label={`Confirm password`} fullWidth
                                name={`confirmpassword`} 
                                id={`confirmpassword`}
                                inputProps={{
                                    style: {
                                        height: "50px",
                                        padding: '0 10px',
                                        backgroundColor: "#f5f5f5"
                                    }
                                }}
                                {...register("confirmpassword")}
                            />
                        </Stack>
                    </Stack>
                    <Button type="submit" fullWidth variant="contained" size="large" sx={{
                            bgcolor: colors.blue[700],
                            marginTop: "40px",
                            "&:hover" : {
                                bgcolor: colors.blue[600]
                            }
                        }}>
                            Apply changes
                    </Button>
                </Box>
                {isFetching && (
                    <Stack
                        alignItems={"center"}
                        justifyContent={"center"}
                        sx={{
                            height: "100%",
                            width: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bgcolor: colors.common.white,
                            zIndex: 1000
                        }}
                    >
                        <Box position={"relative"}>
                            <CircularProgress />
                        </Box>
                    </Stack>
                )}
                {/* Loading */}
            </Box>
        </Box>
    )
}

export default CreateEmployee;