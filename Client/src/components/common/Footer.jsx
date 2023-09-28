import { Box, Grid, IconButton, Stack, Typography } from "@mui/material"

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <Box 
            height={"8rem"}
        >
            <Grid
                container
                height={"100%"}
                justifyContent={"space-around"} 
                alignItems={"center"}
                direction={"row"}
            >
                <Grid xs={8} container >
                    <Grid xs={4} item>
                        <Typography variant="h5" fontWeight={"600"}>
                            Coffee house
                        </Typography>
                    </Grid>

                    <Grid xs={4} item>
                        <Typography 
                            sx={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            @2023
                        </Typography>
                    </Grid>

                    <Grid xs={4} item>
                        <Stack direction={"row"} 
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end"
                            }}
                        >
                            <IconButton aria-label="facebook">
                                <FacebookIcon />
                            </IconButton>

                            <IconButton aria-label="github">
                                <GitHubIcon />
                            </IconButton>

                            <IconButton aria-label="gmail" 
                            >
                                <EmailIcon />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer;