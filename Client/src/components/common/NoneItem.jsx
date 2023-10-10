import { Box, Icon, Stack, Typography } from "@mui/material"


const NoneItem = props => {
    return (
        <Box sx={{
            height: "100%",
            width: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {props.icon}
            <Typography variant="h5" ml={2}>
                {props.title}
            </Typography>
        </Box>
    )
}

export default NoneItem;