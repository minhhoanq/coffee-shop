import { Autocomplete, Box, Stack, TextField, createFilterOptions, Typography, colors, Button } from "@mui/material"
import { useSelector } from "react-redux";

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useCallback } from "react";

const sexs = [
    {
        title: "Male",
        state: "1"
    },
    {
        title: "Female",
        state: "2"
    },
    {
        title: "Orthers",
        state: "3"
    }
]

const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.title,
})

const Personal = () => {
    const user = useSelector(state => state.auth.currentUser);

    const handleSubmitProfile = useCallback(() => {
        console.log("check")
    })

    return (
        <Box pl={2} pr={2} flex={1}>
            <Stack>
                <Box height={"100px"} width={"100px"} mt={2} 
                    sx={{
                        position: "relative"
                    }}>
                    <img src={user.image} height={"100%"} width={"100%"} style={{
                        objectFit: "cover",
                        borderRadius: "50px"
                    }}/>
                    <label htmlFor={`image`} style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        borderRadius: "50px",
                        backgroundColor: "#fff",
                        border: "1px solid #ccc",
                        boxShadow: "rgba(0, 0, 0, 0.2) 0rem 0rem 0.5rem",

                    }}>
                        <Box height={"25px"} width={"25px"}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer"
                            }}
                        >
                            <EditOutlinedIcon fontSize="small"/>
                        </Box>
                    </label>

                    <input id="image" name="image" type="file" hidden/>
                </Box>
                <Box
                    mt={2}
                    sx={{
                        borderTop: "1px solid #ccc"
                    }}
                >
                    <Stack spacing={1} mt={2}>
                        <TextField
                            label="Username"
                            value={user?.username}
                        />

                        <TextField
                            label="First name"
                            value={user?.firstname}
                        />

                        <TextField
                            label="Last name"
                            value={user?.lastname}
                        />

                        <Stack spacing={1} direction={"row"} width={"100%"}>
                            <Autocomplete
                                id="sex"
                                options={sexs}
                                getOptionLabel={(option) => option.title}
                                filterOptions={filterOptions}
                                // onChange={(e, value) => props.sort(value?.state ? value.state : 'default')}
                                sx={{
                                    width: "50%",
                                    outline: "none"
                                }}
                                // size="small"
                                renderInput={(params) => <TextField {...params} label="Sex"/>}
                            />

                            {/* <DatePicker
                            mask="mm"
                            value={new Date()}
                            onChange={console.log}
                            renderInput={(props) => (
                                <TextField {...props} helperText="invalid mask" />
                            )}
                            /> */}
                            <input type="date" style={{
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                width: "50%",
                                padding: "10px"
                            }}/>
                        </Stack>

                        <TextField
                            label="Phone"
                            fullWidth
                            value={user?.phone}
                        />
                        <TextField
                            label="Email"
                            value={user?.email}
                        />
                    </Stack>

                    <Box mt={4} fullWidth sx={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}>
                        <Button variant="contained" sx={{
                                width: "200px",
                                bgcolor: colors.brown[500],
                                "&:hover" : {
                                    bgcolor: colors.brown[400]
                                }
                            }}
                            onClick={handleSubmitProfile}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default Personal;