import { Box, Card, CardActions, CardContent, Icon, IconButton, ListItemIcon, Stack, Typography, colors } from "@mui/material";

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const CardContentCpn = () => {
    return (
        <Card sx={{
            width: "300px",
            height: "150px"
        }}>
            <CardContent>
                <Stack spacing={1} alignItems={"flex-start"}>
                    <IconButton size="large">
                        <RemoveRedEyeOutlinedIcon fontSize="large" color="primary"/>
                    </IconButton>
                    <Typography variant="h5" fontWeight={600}>
                        251
                    </Typography>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
                        <Typography fontWeight={600} color={"#999"}>
                            Total views
                        </Typography>

                       <Box direction={"row"} display={"flex"} alignItems={"center"}>
                            <Typography color={colors.green[500]}>
                                0.43%
                            </Typography>
                                <ArrowUpwardOutlinedIcon color="success" fontSize="small"/>
                       </Box>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default CardContentCpn;