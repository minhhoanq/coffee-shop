import { Box, Typography, colors, Stack } from "@mui/material"

import bgHome from '../assets/images/bgHome.jpeg';
import logo from '../assets/images/logo.jpg';
import { Link } from "react-router-dom";

const options = [
    {
        title: "MENU",
        state: "shop",
    },
    {
        title: "CART",
        state: "cart",
    },
    {
        title: "CONTACT",
        state: "cart",
    },
    {
        title: "INFO",
        state: "info",
    },
]

const Home = () => {

    return (
        <Box
            sx={{
                position: "relative",
                height: "100vh",
                width: { xl: "100%", lg: "100%", md: "100%", xs: "100%"},
                backgroundPosition:"center",
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat",
                backgroundImage: `url(${bgHome})`,
            }}
        >
            <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <img src={logo} alt="logo" height={80} style={{ marginTop: "20px"}}/>
                <Typography 
                    variant="h5" 
                    fontFamily= 'Roboto'
                    mt={2} color={colors.common.white}
                    sx={{
                        fontSize: { xl: "2rem", lg: "2rem", md: "1.8rem", xs: "1.6rem"}
                    }}
                    >C O F F E E & T E A</Typography>
            </Box>

            <Box sx={{
                position: "absolute",
                top: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                p: 5
            }}>
                <Typography variant="h5" sx={{
                    fontStyle: 'italic',
                    color: colors.common.white,
                    fontFamily: 'Raleway',
                    fontSize: { xl: "1.6rem", lg: "1.6rem", md: "1.8rem", xs: "2rem"},
                    textAlign: "center"
                }}>
                    high quality coffee, matcha, tea, and house-baked pastries
                </Typography>

                <Stack direction={"row"} mt={2}
                    sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "2rem",
                    fontWeight:"600",
                    color: "#fff",
                    fontFamily: 'Roboto',
                    textAlign: "center",
                    flexDirection: { xl: "row", lg: "row", md: "row", xs: "column"},
                }}>
                    {options.map((item, index) => (
                        <Link key={index} to={`/${item.state}`} style={{
                            padding: "10px"
                        }}>
                            {item.title}
                        </Link>
                    ))}
                </Stack>
            </Box>
        </Box>
    )
}

export default Home;