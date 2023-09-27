import {  Button, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

const AddATip = () => {
    return (
        <Stack spacing={2}>
                <Typography fontSize={"0.9rem"} fontWeight={"600"}>
                    ADD A TIP
                </Typography>

                <Stack spacing={2} direction={"row"} mt={2} sx={{
                    justifyContent: "space-between"
                }}>
                    <Button sx={{
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        bgcolor: "rgba(0, 0, 0, 0.09)",
                        color: "black",
                        width: "100%"
                    }}>
                        <Typography fontSize={"1.1rem"} fontWeight={"600"}>
                            10%
                        </Typography>
                        <Typography fontSize={"0.8rem"}>
                            $1.33
                        </Typography>
                    </Button>
                    <Button sx={{
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        bgcolor: "rgba(0, 0, 0, 0.09)",
                        color: "black",
                        width: "100%"
                    }}>
                        <Typography fontSize={"1.1rem"} fontWeight={"600"}>
                            15%
                        </Typography>
                        <Typography fontSize={"0.8rem"}>
                            $1.33
                        </Typography>
                    </Button>

                    <Button sx={{
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        bgcolor: "rgba(0, 0, 0, 0.09)",
                        color: "black",
                        width: "100%"

                    }}>
                        <Typography fontSize={"1.1rem"} fontWeight={"600"}>
                            20%
                        </Typography>
                        <Typography fontSize={"0.8rem"}>
                            $1.33
                        </Typography>
                    </Button>

                    <Button sx={{
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        bgcolor: "rgba(0, 0, 0, 0.09)",
                        color: "black",
                        width: "100%"
                    }}>
                        <Typography fontSize={"1.1rem"} fontWeight={"600"}>
                            ...
                        </Typography>
                        <Typography fontSize={"0.8rem"}>
                            $1.33
                        </Typography>
                    </Button>
                </Stack>

                <TextField
                    id="input-with-icon-textfield"
                    placeholder="Add coupon or gift card"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocalOfferOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>
    )
}

export default AddATip;