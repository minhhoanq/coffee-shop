import React, { useState } from "react";

import { Box, Stack, TextField, Button, FormGroup, FormControlLabel, Checkbox, Typography, colors, CircularProgress, circularProgressClasses } from '@mui/material';
import bgLogin from '../assets/images/backgroundLogin.jpg';
import logoGoogle from '../assets/images/google.png';
import logo from '../assets/images/logo.jpg';
import { Link, useNavigate } from "react-router-dom";
import Animate from "../components/common/Animate";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../redux/asyncActions/authActions";
import Swal from "sweetalert2";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [onRequest, setOnRequest] = useState(false);
    const [logginProgress, setLogginProgress] = useState(false);
    const isFetching = useSelector(state => state.auth.isFetching);

    
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
        reset,
    } = useForm({
        defaultValues: {
            username: "",
            fname: "",
            lname: "",
            phone: "",
            email: "",
            password: "",
            cfPassword: "",
        }
    });

    const onSignin = async(data) => {
        // e.preventDefault();
        // setOnRequest(true);

        // const interval = setInterval(() => {
        //     setLogginProgress(true)
        // }, 50);

        // setTimeout(() => {
        //     clearInterval(interval)
        // }, 2000);
        
        // setTimeout(() => {
        //     navigate('/')
        // }, 3300);
        const response = await dispatch(loginActions(data));
        const reqStatus = response.meta.requestStatus;
        console.log(response);
        if(reqStatus === 'fulfilled' && isFetching === false) {
            setIsLoggedIn(true);
            setTimeout(() => {
                navigate('/')
            }, 1000)
        } else if (reqStatus === 'rejected') {
            setOnRequest(false)
            Swal.fire('', response.payload.response.data, 'error')
        }
    }

    return (
        <Box
            position="absolute"
            height="100vh"
            width={"100%"}
            sx={
                {"::-webkit-scrollbar": { display: "none" }}
            }
        >
            {/* background box */}
            <Box
                sx={
                    {
                        position:"absolute",
                        left:"0",
                        height:"100%",
                        width: isLoggedIn ? "60%" : { xl: "60%", lg: "60%", md: "50%", xs: "0%"},
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundPosition:"center",
                        // backgroundSize:"contain",
                        // backgroundRepeat:"no-repeat",
                        // backgroundImage: `url(${bgLogin})`,
                    }
                }
            >
                <img src={bgLogin}
                    height= {"60%"}
                    style={{
                        objectFit: "contain"
                    }}
                />
            </Box>
            {/* background box */}
            
            {/* Login form */}
            <Box sx={{
                position:"absolute",
                display:"flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                right:0,
                height:"100%",
                width: isLoggedIn ? "100%" : { xl: "30%", lg: "40%", md: "50%", xs: "100%"},
                transition: "all 1s ease-in-out",
                bgcolor: colors.common.white,
                
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    opacity: isLoggedIn ? 0 : 1,
                    transition: "all 0.3s ease-in-out",
                    height: "100%",
                    width:" 100%",
                    ":-webkit-scrollbar": { display: "none"},
                    p: 3,
                    boxSizing: "border-box",
                    border: "1px solid #ccc",
                }}>
                    {/* Logo */}
                    <Box
                    sx={{
                        textAlign: "center",
                    }}>
                        <Animate type="fade" delay={0.5}>
                            <img src={logo} alt='logo' height={100}/>
                        </Animate>
                    </Box>
                    {/* Logo */}

                    {/* Form */}
                    <Animate type="fade" sx={{ width: "100%"}}>
                        <Box sx={{
                            mt: "10px",
                            width: "100%",
                            // height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            ":-webkit-scrollbar": { display: "none"}
                        }}>
                            
                                <Box component={"form"} maxWidth={400} width={"100%"} onSubmit={handleSubmit(onSignin)} >
                                    <Stack spacing={1}>
                                        <Stack>
                                            <TextField label="Username" fullWidth
                                                name="username" 
                                                id="username" 
                                                size="large"
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
                                                        {
                                                            required: 'Please enter your account name.',
                                                            minLength: {
                                                                value: 4,
                                                                message: 'Please enter more than 4 characters.'
                                                            }
                                                        }
                                                    )
                                                }
                                                />
                                            <Typography color={"error"}>{errors?.username && errors.username.message}</Typography>
                                        </Stack>
                                        <Stack spacing={1} direction={"row"} justifyContent={"space-between"}>
                                            <Stack flex={1}>
                                                <TextField label="First Name" type="text" fullWidth
                                                    name="fname" 
                                                    id="fname"
                                                    size="large"
                                                inputProps={{
                                                    style: {
                                                        height: "50px",
                                                        padding: '0 10px',
                                                    }
                                                }}
                                                    sx={{
                                                        bgcolor: colors.grey[200]
                                                    }}
                                                    {...register("fname", 
                                                            {
                                                                required: 'Please enter your first name.',
                                                            }
                                                        )
                                                    }
                                                    />
                                                <Typography color={"error"}>{errors?.fname && errors.fname.message}</Typography>
                                            </Stack>

                                            <Stack flex={1}>
                                                <TextField label="Last Name" type="text" fullWidth
                                                    name="lname" 
                                                    id="lname"
                                                    size="large"
                                                inputProps={{
                                                    style: {
                                                        height: "50px",
                                                        padding: '0 10px',
                                                    }
                                                }}
                                                    sx={{
                                                        bgcolor: colors.grey[200]
                                                    }}
                                                    {...register("lname", 
                                                            {
                                                                required: 'Please enter your last name.',
                                                            }
                                                        )
                                                    }
                                                    />
                                                <Typography color={"error"}>{errors?.lname && errors.lname.message}</Typography>
                                            </Stack>
                                        </Stack>

                                        <Stack >
                                            <TextField label="Phone" fullWidth type="number"
                                                name="phone" 
                                                id="phone" 
                                                size="large"
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
                                                        {
                                                            required: 'Please enter your phone number.',
                                                            pattern: {
                                                                value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                                                                message: 'Please enter the correct phone number.'
                                                            }
                                                        }
                                                    )
                                                }
                                                />
                                            <Typography color={"error"}>{errors?.phone && errors.phone.message}</Typography>
                                        </Stack>
                                        <Stack>
                                            <TextField label="Email" type="email" fullWidth
                                                name="email" 
                                                id="email"
                                                size="large"
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
                                                        {
                                                            required: 'Please enter your email.',
                                                            pattern: {
                                                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                                                message: 'Please enter the correct email.'
                                                            }
                                                        }
                                                    )
                                                }
                                                />
                                            <Typography color={"error"}>{errors?.email && errors.email.message}</Typography>
                                        </Stack>
                                        <Stack >
                                            <TextField label="Password" type="password" fullWidth
                                                name="password" 
                                                id="password" 
                                                size="large"
                                                inputProps={{
                                                    style: {
                                                        height: "50px",
                                                        padding: '0 10px',
                                                    }
                                                }}
                                                sx={{
                                                    bgcolor: colors.grey[200]
                                                }}
                                                {...register("password", 
                                                        {
                                                            required: 'Please enter your password.',
                                                            pattern: {
                                                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                                                message: 'Password minimum eight characters, including at least one letter, one number, and one special character.'
                                                            }
                                                        }
                                                    )
                                                }
                                                />
                                            <Typography color={"error"}>{errors?.password && errors.password.message}</Typography>
                                        </Stack>
                                        <Stack >
                                            <TextField label="Confirm Password" type="password" fullWidth
                                                name="cfPassword" 
                                                id="cfPassword"
                                                size="large"
                                                inputProps={{
                                                    style: {
                                                        height: "50px",
                                                        padding: '0 10px',
                                                    }
                                                }}
                                                sx={{
                                                    bgcolor: colors.grey[200]
                                                }}
                                                {...register("cfPassword", 
                                                        {
                                                            required: 'Please confirm password',
                                                            
                                                        }
                                                    )
                                                }
                                                />
                                            <Typography color={"error"}>{errors?.cfPassword && errors.cfPassword.message}</Typography>
                                        </Stack>
                                        <Button type="submit" size="lagre" variant="contained" 
                                        sx={{
                                            bgcolor:colors.brown[500],
                                            "&:hover" : {
                                                bgcolor: colors.brown[400]
                                            }
                                        }}>
                                            Sign up
                                        </Button>
                                        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                            <FormGroup>
                                                <FormControlLabel control={<Checkbox/>} label="Agree to our terms"/>
                                            </FormGroup>
                                            {/* <Typography color={"error"} fontWeight={"bold"} >
                                                <Link to='#'>
                                                    Quên mật khẩu?
                                                </Link>
                                            </Typography> */}
                                        </Stack>

                                        {/* <Stack spacing={1} direction={"row"} sx={{
                                            width: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}>
                                            <img src={logoGoogle} height={20}/>
                                            <Link style={{
                                                fontSize: "1.1rem",
                                                fontWeight: "500"
                                            }}>
                                                Đăng nhập bằng Google
                                            </Link>
                                        </Stack> */}
                                    </Stack>
                                </Box>
                        </Box>

                         {/* Footer */}
                        <Box sx={{
                            textAlign: "center", p: 2, zIndex: 2,
                            // mt: "20px"
                        }}>
                            <Animate type="fade" delay={1}>
                                <Typography
                                    display={"inline"}
                                    fontWeight={"bold"}
                                    sx={{
                                        "& > a": { color: colors.red[900], ml: "5px"}
                                    }}
                                >
                                    Don't have an account? - 
                                    <Link to={'#'}>
                                        Sign in
                                    </Link>
                                </Typography>
                            </Animate>
                        </Box>
                        {/* Footer */}
                    </Animate>
                    {/* Form */}

                    {/* Loading */}
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
                                {/* <CircularProgress
                                    variant="determinate"
                                    disableShrink
                                    value={logginProgress}
                                    size={100}
                                    sx={{
                                        [`& .${circularProgressClasses.circle}`] : {
                                            strokeLinecap: "round"
                                        },
                                        position: "absolute",
                                        left: 0,
                                        color: colors.brown[600]
                                    }}
                                /> */}
                            </Box>
                        </Stack>
                    )}
                    {/* Loading */}
                </Box>
            </Box>
            {/* Login form */}
        </Box>
    )
}

export default Register;