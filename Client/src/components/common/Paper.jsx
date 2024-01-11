import { Stack } from "@mui/material";

const Paper = props => {
    return (
        <Stack
            sx={{
                position: 'absolute',
                top: "50%",
                left: "50%",
                transform: 'translate(-50%, -50%)',
                width: 500,
                minHeight: 200,
                height: "550px",
                bgcolor: props.bgcolor,
                borderRadius: 1,
                p: 2,
                outline: "none",
            }} 
        >
            {props.children}
        </Stack>
    )
}

export default Paper;