import { Box, Stack, colors, Typography, IconButton } from "@mui/material"
import { Link } from "react-router-dom";

import logo from '../../assets/images/logo.jpg';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const navBars = [
    {
        title: "HOME",
        state: "home",
        pathname: "/"
    },
    {
        title: "MENU",
        state: "Menu",
        pathname: "/Menu"
    },
    {
        title: "CART",
        state: "cart",
        pathname: "/cart"
    },
    {
        title: "INFO",
        state: "info",
        pathname: "/"
    }
]

const Header = () => {
    return (
        <Box 
            width={"100%"} 
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"fixed"}
            top={0}
            right={0}
        >
            <Box 
                maxWidth={"1000px"} 
                width={"100%"} 
                // height={"65px"}
                // border={"1px solid #ccc"}
                mt={2}
                mb={2}
            >  
                <Stack direction={"row"} 
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Stack 
                        direction={"row"} 
                        flex={1} 
                        flexWrap={"wrap"}
                        sx={{
                            display: { xl: "flex", lg: "flex", md: "flex", sm: "flex", xs: "none"}
                        }}
                    >
                        {navBars.map((item, index) => (
                            <Link 
                                to={item.pathname} 
                                key={index} 
                                style={{
                                    fontSize: "1rem", 
                                    fontWeight: "600", 
                                    fontFamily: "Arial",
                                    padding: "0 10px",
                                    
                                }}>
                                {item.title}
                            </Link>
                        ))}
                    </Stack>

                    <Box sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        flex: 1
                    }}>
                        {/* Logo */}
                        <img src={logo} alt="logo" height={60}/>
                        {/* Logo */}

                        {/* Text */}
                        <Typography 
                            // variant="h7" 
                            fontFamily= 'Roboto'
                            sx={{
                                fontSize: { xl: "1.8rem", lg: "1.6rem", md: "1.6rem", xs: "1.4rem"},
                                
                            }}
                            >C O F F E E & T E A</Typography>
                        {/* Text */}
                    </Box>

                    <Stack spacing={2} flex={1} direction={"row"}
                        display={"flex"}
                        justifyContent={"flex-end"}
                        alignItems={"center"}
                    >
                        <IconButton aria-label="notifycation" color="inherit">
                            <FavoriteBorderIcon />
                        </IconButton>
                        <IconButton aria-label="cart" color="inherit">
                            <ShoppingCartOutlinedIcon />
                        </IconButton>
                        <IconButton aria-label="info" color="inherit">
                            <AccountCircleOutlinedIcon />
                        </IconButton>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}

export default Header;