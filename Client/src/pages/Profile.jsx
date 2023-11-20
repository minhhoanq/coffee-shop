import { Autocomplete, Box, Stack, TextField, createFilterOptions, Typography, colors, Button } from "@mui/material"

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfileActions, updateUserbyUserAction } from "../redux/asyncActions/authActions";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const sexs = [
    {
        title: "Male",
        state: "1"
    },
    {
        title: "Female",
        state: "2"
    },
    {
        title: "Orthers",
        state: "3"
    }
]

const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.title,
})

const Personal = () => {
    const user = useSelector(state => state.auth.currentUser);
    const dispatch = useDispatch();

    // const handleSubmitProfile = useCallback(() => {
    //     console.log("check")
    // })

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


    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
        reset,
    } = useForm({
        defaultValues: {
            id: user.id,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            sex: user.sex ? '1' : '2',
            birth: user.birth,
            phone: user.phone,
            email: user.email,
            image: user.image,
        }
    });
    
    // useEffect(() => {
    //     reset({
    //         id: user.id,
    //         username: user.username,
    //         firstname: user.firstname,
    //         lastname: user.lastname,
    //         sex: user.sex ? '1' : '2',
    //         birth: user.birth,
    //         phone: user.phone,
    //         email: user.email,
    //         image: user.image,
    //     });
    // },[])

    const handleSubmitProfile = async(data) => {
        console.log(data);
        const formData = new FormData();
        if(data.image.length > 0) formData.append('image', data.image[0])
        delete data.image
        
        for(let i of Object.entries(data)) formData.append(i[0], i[1])

        console.log(formData)
        const updateProfile = await dispatch(updateUserbyUserAction(formData));
        console.log(updateProfile);

        if(updateProfile.meta.requestStatus === 'fulfilled') {
            await dispatch(getProfileActions());
            // setEdit(true);
              
            Toast.fire({
                icon: 'success',
                title: updateProfile.payload.data.mes,
            })
            
        }

        if(updateProfile.meta.requestStatus === 'rejected') {
            // await dispatch(getProfileActions());
            // setEdit(true);
              
            Toast.fire({
                icon: 'error',
                title: 'Lỗi! Vui lòng thử lại sau.',
            })
            
        }
    }

    return (
        <Box pl={2} pr={2} flex={1}>
            <form onSubmit={handleSubmit(handleSubmitProfile)}>

            <Stack>
                <Box height={"100px"} width={"100px"} mt={2} 
                    sx={{
                        position: "relative"
                    }}>
                    <img src={user.image} height={"100%"} width={"100%"} style={{
                        objectFit: "cover",
                        borderRadius: "50px"
                    }}/>
                    <label htmlFor={`image`} style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        borderRadius: "50px",
                        backgroundColor: "#fff",
                        border: "1px solid #ccc",
                        boxShadow: "rgba(0, 0, 0, 0.2) 0rem 0rem 0.5rem",

                    }}>
                        <Box height={"25px"} width={"25px"}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer"
                            }}
                        >
                            <EditOutlinedIcon fontSize="small"/>
                        </Box>
                    </label>

                    <input id="image" name="image" type="file" hidden {...register('image')}/>
                </Box>
                <Box
                    mt={2}
                    sx={{
                        borderTop: "1px solid #ccc"
                    }}
                >
                    <Stack spacing={1} mt={2}>
                        <TextField
                            label="Username"
                            // value={user?.username}
                            {...register("username", 
                                    {
                                        required: 'Vui lòng nhập tên đăng nhập.',
                                        minLength: {
                                            value: 4,
                                            message: 'Vui lòng nhập nhiều hơn 4 ký tự.'
                                        }
                                    }
                                )
                            }
                        />

                        <TextField
                            label="First name"
                            {...register("firstname", 
                                    {
                                        required: 'Vui lòng nhập họ của bạn.'
                                    }
                                )
                            }
                        />

                        <TextField
                            label="Last name"
                            {...register("lastname", 
                                    {
                                        required: 'Vui lòng nhập tên của bạn.'
                                    }
                                )
                            }
                        />

                        <Stack spacing={1} direction={"row"} width={"100%"}>
                            <Autocomplete
                                id="sex"
                                options={sexs}
                                getOptionLabel={(option) => option.title}
                                filterOptions={filterOptions}
                                // onChange={(e, value) => props.sort(value?.state ? value.state : 'default')}
                                sx={{
                                    width: "50%",
                                    outline: "none"
                                }}
                                // size="small"
                                renderInput={(params) => <TextField {...params} label="Sex"/>}
                            />

                            {/* <DatePicker
                            mask="mm"
                            value={new Date()}
                            onChange={console.log}
                            renderInput={(props) => (
                                <TextField {...props} helperText="invalid mask" />
                            )}
                            /> */}
                            <input type="date" style={{
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                width: "50%",
                                padding: "10px"
                            }}/>
                        </Stack>

                        <TextField
                            label="Phone"
                            fullWidth
                            {...register("phone", 
                                    {
                                        required: 'Vui lòng nhập số điện thoại.',
                                        pattern: {
                                            value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                                            message: 'Số điện thoại phải là số và tối thiểu 10 kí tự.'
                                        }
                                    }
                                )
                            }
                        />
                        <TextField
                            label="Email"
                            {...register("email", 
                            {
                                required: 'Vui lòng nhập email.',
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: 'Chưa đúng định dạng email.'
                                }
                            }
                        )
                    }
                        />
                    </Stack>

                    <Box mt={4} fullWidth sx={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}>
                        <Button variant="contained" sx={{
                                width: "200px",
                                bgcolor: colors.brown[500],
                                "&:hover" : {
                                    bgcolor: colors.brown[400]
                                }
                            }}
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Stack>
            </form>
        </Box>
    )
}

export default Personal;