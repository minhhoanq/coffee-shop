import React, { useState } from "react";

import { Box, Stack, TextField, Button, FormGroup, FormControlLabel, Checkbox, Typography, colors, CircularProgress, circularProgressClasses } from '@mui/material';
import bgLogin from '../assets/images/backgroundLogin.jpg';
import logoGoogle from '../assets/images/google.png';
import logo from '../assets/images/logo.jpg';
import { Link, useNavigate } from "react-router-dom";
import Animate from "../components/common/Animate";


const LoginPage = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [onRequest, setOnReqest] = useState(false);
    const [logginProgress, setLogginProgress] = useState(false);

    const onSignin = (e) => {
        e.preventDefault();
        setOnReqest(true);

        const interval = setInterval(() => {
            setLogginProgress(prev => prev + 100 / 40)
        }, 50);

        setTimeout(() => {
            clearInterval(interval)
        }, 2000);
        
        setTimeout(() => {
            setIsLoggedIn(true);
        }, 2100);

        setTimeout(() => {
            navigate('/dashboard')
        }, 3300);
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
                    justifyContent: "space-around",
                    opacity: isLoggedIn ? 0 : 1,
                    transition: "all 0.3s ease-in-out",
                    height: "80%",
                    width:" 80%",
                    ":-webkit-scrollbar": { display: "none"},
                    p: 3,
                    boxSizing: "border-box",
                    border: "1px solid #ccc",
                }}>
                    {/* Logo */}
                    <Box
                    sx={{
                        textAlign: "center",
                        p: 5,
                        pt: 0,
                        pb: 0
                    }}>
                        <Animate type="fade" delay={0.5}>
                            <img src={logo} alt='logo' height={100}/>
                        </Animate>
                    </Box>
                    {/* Logo */}

                    {/* Form */}
                    <Animate type="fade" sx={{ width: "100%"}}>
                        <Box sx={{
                            width: "100%",
                            // height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            ":-webkit-scrollbar": { display: "none"}
                        }}>
                            
                                <Box component={"form"} maxWidth={400} width={"100%"} onSubmit={onSignin} >
                                    <Stack spacing={3}>
                                        <TextField label="Tên đăng nhập" fullWidth
                                            inputProps={{
                                                style: {
                                                    height: "50px",
                                                    padding: '0 10px',
                                                }
                                            }}
                                            sx={{
                                                bgcolor: colors.grey[200]
                                            }}
                                            />
                                        <TextField label="Mật khẩu" type="password" fullWidth
                                            inputProps={{
                                                style: {
                                                    height: "50px",
                                                    padding: '0 10px',
                                                }
                                            }}  
                                            sx={{
                                                bgcolor: colors.grey[200]
                                            }}/>
                                        <Button type="submit" size="lagre" variant="contained" 
                                        sx={{
                                            bgcolor:colors.brown[500],
                                            "&:hover" : {
                                                bgcolor: colors.brown[400]
                                            }
                                        }}>
                                            Đăng nhập
                                        </Button>
                                        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                            <FormGroup>
                                                <FormControlLabel control={<Checkbox/>} label="Ghi nhớ mật khẩu?"/>
                                            </FormGroup>
                                            <Typography color={"error"} fontWeight={"bold"} >
                                                <Link to='#'>
                                                    Quên mật khẩu?
                                                </Link>
                                            </Typography>
                                        </Stack>

                                        <Stack spacing={1} direction={"row"} sx={{
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
                                        </Stack>
                                    </Stack>
                                </Box>
                        </Box>

                         {/* Footer */}
                        <Box sx={{
                            textAlign: "center", p: 2, zIndex: 2,
                            mt: "20px"
                        }}>
                            <Animate type="fade" delay={1}>
                                <Typography
                                    display={"inline"}
                                    fontWeight={"bold"}
                                    sx={{
                                        "& > a": { color: colors.red[900], ml: "5px"}
                                    }}
                                >
                                    Bạn chưa có tài khoản - 
                                    <Link to={'#'}>
                                        Đăng ký ngay
                                    </Link>
                                </Typography>
                            </Animate>
                        </Box>
                        {/* Footer */}
                    </Animate>
                    {/* Form */}

                    {/* Loading */}
                    {onRequest && (
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
                                <CircularProgress
                                    variant="determinate"
                                    sx={{ color: colors.grey[200]}}
                                    value={1}
                                />
                                <CircularProgress
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
                                        color: colors.green[600]
                                    }}
                                />
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

export default LoginPage;