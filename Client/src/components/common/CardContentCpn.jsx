import { Box, Card, CardActions, CardContent, Icon, IconButton, ListItemIcon, Stack, Typography, colors } from "@mui/material";


const CardContentCpn = props => {
    const item = props.item;
    return (
        <Card sx={{
            // width: "250px",
            // height: "150px"
        }}>
            <CardContent>
                <Stack spacing={1} alignItems={"flex-start"}>
                    <IconButton size="large" color="info">
                        {item.icon}
                    </IconButton>
                    <Typography variant="h5" fontWeight={600}>
                        {item.number}
                    </Typography>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
                        <Typography fontWeight={600} color={"#999"}>
                            Total {item.content}
                        </Typography>

                       <Box direction={"row"} display={"flex"} alignItems={"center"}>
                            <Typography color={item.color}>
                                {item.percent}%
                            </Typography>
                            {item.iconPercent}
                       </Box>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default CardContentCpn;