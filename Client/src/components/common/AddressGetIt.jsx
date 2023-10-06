import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const AddressGetIt = () => {
    return (
        <Stack>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography fontSize={"0.9rem"} fontWeight={"600"}>
                        HOW TO GET IT
                    </Typography>
                    <Button color="error">
                        Edit
                    </Button>
                </Stack>

                <Stack spacing={1} mt={2}>
                    <Link to={'/'} style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        color: "rgba(0, 0, 0, 0.8)",
                        "&:hover" : {
                            color: "#000"
                        }
                    }}>
                        <LocationOnOutlinedIcon/>
                        Pickup: 1026 SW Harvey Milk Street
                    </Link>

                    <Link to={'/'} style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        color: "rgba(0, 0, 0, 0.8)",
                        textDecoration: "none"
                    }}>
                        <AccessTimeOutlinedIcon/>
                        Today at 8:00 am
                    </Link>
                </Stack>
            </Stack>

    )
}

export default AddressGetIt;