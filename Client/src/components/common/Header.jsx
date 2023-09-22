import { Box, Stack, colors, Typography, IconButton, AppBar, Toolbar, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, Tooltip } from "@mui/material"
import { Link } from "react-router-dom";

import logo from '../../assets/images/logo.jpg';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import Animate from "./Animate";
import { useState } from "react";
import MenuAccount from "./MenuAccount";

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

const navBarsRight = [
    {
        title: "NOTIFICATION",
        state: "notification",
        icon: <FavoriteBorderIcon/>,
        pathname: "/"
    },
    {
        title: "CART",
        state: "cart",
        icon: <ShoppingCartOutlinedIcon/>,
        pathname: "/"
    },
    {
        title: "PROFILE",
        state: "profile",
        icon: <AccountCircleOutlinedIcon/>,
        pathname: "/"
    }
]

const Header = () => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenuRight = Boolean(anchorEl);

    const MenuItem = (props) => {
        return (
            <ListItem key={props.index} disableGutters disablePadding sx={{ py: 0.5}}>
                <ListItemButton
                    sx={{
                        height: "35px",
                        borderRadius: "10px",
                        bgcolor: props.isActive ? colors.green[600] : "",
                        color: props.isActive ? colors.common.white : "",
                        "&:hover": {
                            bgcolor: props.isActive ? colors.green[600] : "",
                            color: props.isActive ? colors.common.white : "",
                        },
                    }}
                >
                    {/* <ListItemIcon sx={{
                        minWidth: "40px",
                        color: props.isActive ? colors.common.white : "",
                    }}>
                        {props.item.icon}
                    </ListItemIcon> */}

                    <ListItemText
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                    primary={
                        <Typography fontWeight={600}>
                            {props.item.title}
                        </Typography>
                    }/>
                </ListItemButton>
            </ListItem>
        )
    }

    const handleOpenNavbar = () => {
        setOpen(!open);
    }

    const handleShowMenu = (e) => {
        setAnchorEl(e.currentTarget);
    }
    console.log(anchorEl?.ariaLabel)

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

                    sx={{
                        display:"flex",
                        justifyContent:{ xl: "center", lg: "center", md: "center", xs: "flex-start"},
                        alignItems:"center",
                    }}
                >
                    <Stack 
                        direction={"row"} 
                        flexWrap={"wrap"}
                        sx={{
                            flex: { xl: "1", lg: "1", md: "1", sm: "1", xs: "0"},
                            display: "flex",
                        }}
                    >
                        <Box 
                            sx={{
                                display: { xl: "flex", lg: "flex", md: "flex", sm: "flex", xs: "none"},
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
                        </Box>

                        <Toolbar variant="dense" sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            display: { xl: "none", lg: "none", md: "none", sm: "none", xs: "block"}
                        }}
                        >
                            <IconButton onClick={handleOpenNavbar} edge="start" color="inherit" aria-label="menu" size="large" sx={{ mr: 2 }}>
                            <MenuIcon fontSize="large"/>
                            </IconButton>
                        </Toolbar>

                        <Drawer
                            sx={{
                                '& .MuiDrawer-paper': {
                                    width: "80%",
                                    boxSizing: 'border-box',
                                  },
                            }}
                            open={open}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center"
                                }}
                            >
                                <IconButton onClick={() => setOpen(!open)}
                                    size="small"
                                    sx={{
                                        width: "50px",
                                        height: "50px",
                                    }}
                                >
                                    <ArrowBackIosIcon fontSize="small"/>
                                </IconButton>
                            </Box>
                            {
                                navBars.map((item, index) => (
                                    <Link to={item.pathname} key={index}>
                                        <MenuItem
                                            item={item}
                                        />
                                    </Link>
                                ))
                            }

                            {
                                navBarsRight.map((item, index) => (
                                    <Link to={item.pathname} key={index}>
                                        <MenuItem
                                            item={item}
                                        />
                                    </Link>
                                ))
                            }
                        </Drawer>
                    </Stack>

                    {/* <Animate type="fade" delay={0.5}> */}
                        <Box 
                            flex={1}   
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
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
                    {/* </Animate> */}

                    <Stack 
                        spacing={1} 
                        direction={"row"}
                        flex={1} 
                        sx={{
                            display:{ xl: "flex", lg: "flex", md: "flex", sm: "flex", xs: "none"},
                            justifyContent:"flex-end",
                            alignItems:"center",
                        }}
                    >
                        {navBarsRight.map((item, index) => (
                            <>
                                <Tooltip
                                    title={item.title}
                                >
                                    <IconButton 
                                        key={index} 
                                        aria-label={item.state} 
                                        color="inherit" 
                                        onClick={handleShowMenu}
                                        aria-controls={openMenuRight ? item.state : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={openMenuRight ? "true" : undefined}
                                        >
                                        {item.icon}
                                    </IconButton>
                                </Tooltip>
                                {anchorEl?.ariaLabel === item.state && openMenuRight === true ? (
                                    <MenuAccount
                                        anchorEl={anchorEl}
                                        id={item.state}
                                        onClose={() => setAnchorEl(null)}
                                        onClick={() => setAnchorEl(null)}
                                        open={openMenuRight}
                                        item={item}
                                    />
                                    // <Box>BBB</Box>
                                ) : null}
                            </>
                        ))}
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}

export default Header;