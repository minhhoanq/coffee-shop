import { Box } from "@mui/material"

import bg from '../../assets/images/bgHome.jpeg'

const Banner = () => {
    return (
        <Box sx={{
            height: "200px",
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            backgroundImage: `url(${bg})`,
        }}>
        </Box>
    )
}

export default Banner;