import { Stack } from "@mui/material";

const Paper = props => {
    return (
        <Stack
            sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 500,
                minHeight: 200,
                height: "550px",
                bgcolor: 'background.paper',
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