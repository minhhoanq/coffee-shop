import { Paper, Box } from "@mui/material"

const MPaper = props => {

    return (
        <Paper
            elevation={0}
            sx={{
                p: 2,
                height: props.height ? props.height : "unset",
                // width: props.width ? props.width : "unset",
                boxShadow: "rgba(145, 158, 171, 1) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                cursor: "pointer"
            }}
        >
            <Box>
                {props.children}
            </Box>
        </Paper>
    )
}

export default MPaper;