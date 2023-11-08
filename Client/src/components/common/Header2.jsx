import { Box, Grid, colors } from "@mui/material"
import { Link } from "react-router-dom"

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
    // {
    //     title: "INFO",
    //     state: "info",
    //     pathname: "/"
    // }
]

const navBarsRight = [
    {
        title: "NOTIFICATION",
        state: "notification",
        // icon: <FavoriteBorderIcon/>,
        // pathname: "/"
    },
    {
        title: "PROFILE",
        state: "profile",
        // icon: <AccountCircleOutlinedIcon/>,
        pathname: "/user/account/profile"
    }
]

const Header2 = () => {
    return (
        <Box 
        position={"fixed"}
        top={0}
        right={0}
        left={0}
        zIndex={1000}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        boxShadow = {"0 2px 10px 0 rgba(0,0,0,.15)"}
        sx={{
            height: "4rem",
            bgcolor: colors.common.white,
            overflow: 'auto hidden',
            "::-webkit-scrollbar": { display: "none" }
        }}>
            <Grid spacing={4} container xs={10} height={"100%"}
            display={"flex"}
            flexWrap={"nowrap"}
            >
                {navBars.map((item, index) => (
                    <Grid item height={"100%"} key={index} alignItems={"center"}>
                        <Link
                        to={item.pathname}
                        style={{
                            height: "4rem",
                            fontWeight: "600",
                            color: "rgba(0, 0, 0, 0.8)"
                        }}>
                            {item.title}
                        </Link>
                    </Grid>
                ))}

                {navBarsRight.map((item, index) => (
                    <Grid item height={"100%"} key={index} alignItems={"center"}>
                        <Link
                        to={item.pathname}
                        style={{
                            height: "4rem",
                            fontWeight: "600",
                            color: "rgba(0, 0, 0, 0.8)"
                        }}>
                            {item.title}
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Header2;