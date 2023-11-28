import { useEffect, useState } from "react";

import { Autocomplete, Box, Button, CircularProgress, Stack, TextField, Typography, colors, createFilterOptions } from "@mui/material";

import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Breadcrumbs from "./Breadcrumbs";

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

const UserForm = props => {
    // const isFetching = useSelector(state => state.product.isPending);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const item = props.item;

    console.log(item)

    const {
        control,
        register,
        handleSubmit,
        reset
    } = useForm(
        {
        defaultValues: {
            username: " ",
            firstname: " ",
            lastname: " ",
            sex: " ",
            email: " ",
            phone: " ",
        }
    }
    );

    useEffect(() => {
       if(item != undefined) {
        reset({
            username: item.username,
            firstname: item.firstname,
            lastname: item.lastname,
            sex: item.sex,
            email: item.email,
            phone: item.phone,
        })
       }
    },[item])

    const handleSubmitForm = (data) => {
        props.submit(data);
    }

    return (
        <Box>
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
            component={"form"} onSubmit={handleSubmit(handleSubmitForm)} 
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
                        </Stack>

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
                                name={`confirmPassword`} 
                                id={`confirmPassword`}
                                inputProps={{
                                    style: {
                                        height: "50px",
                                        padding: '0 10px',
                                        backgroundColor: "#f5f5f5"
                                    }
                                }}
                                {...register("confirmPassword")}
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
                {/* {isFetching && (
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
                )} */}
                {/* Loading */}
            </Box>
        </Box>
    )
}

export default UserForm;