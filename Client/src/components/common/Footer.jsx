import { Box, IconButton, Stack, Typography } from "@mui/material"

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <Box 
            height={"8rem"}
        >
            <Stack
            height={"100%"}
                justifyContent={"space-around"} 
                alignItems={"center"}
                direction={"row"}
            >
                <Typography variant="h5" fontWeight={"600"}>
                    Coffee house
                </Typography>

                <Typography>
                    @2023
                </Typography>

                <Stack direction={"row"}>
                    <IconButton aria-label="facebook">
                        <FacebookIcon />
                    </IconButton>

                    <IconButton aria-label="github">
                        <GitHubIcon />
                    </IconButton>

                    <IconButton aria-label="gmail">
                        <EmailIcon />
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Footer;