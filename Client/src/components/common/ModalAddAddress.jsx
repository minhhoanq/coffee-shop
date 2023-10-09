import { Autocomplete, Box, Button, IconButton, Modal, Stack, TextField, Typography, colors, createFilterOptions } from "@mui/material";

import ClearIcon from '@mui/icons-material/Clear';

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

const ModalAddAddress = props => {

    const handleCloseModal = () => {
        props.close(false)
    }

    return (
        <Modal
            open={props.open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Stack
                sx={{
                    position: 'absolute',
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
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}
                >
                    <IconButton onClick={handleCloseModal}>
                        <ClearIcon/>
                    </IconButton>
                </Box>

               <Stack spacing={2}>
                    <Typography variant="h5">
                        Add new address
                    </Typography>

                    <Autocomplete
                        id="province"
                        options={sexs}
                        getOptionLabel={(option) => option.title}
                        filterOptions={filterOptions}
                        // onChange={(e, value) => props.sort(value?.state ? value.state : 'default')}
                        sx={{
                            width: "100%",
                            outline: "none"
                        }}
                        // size="small"
                        renderInput={(params) => <TextField {...params} label="Province/City" />}
                    />

                    <Autocomplete
                        id="province"
                        options={sexs}
                        getOptionLabel={(option) => option.title}
                        filterOptions={filterOptions}
                        // onChange={(e, value) => props.sort(value?.state ? value.state : 'default')}
                        sx={{
                            width: "100%",
                            outline: "none"
                        }}
                        // size="small"
                        renderInput={(params) => <TextField {...params} label="Province/City" />}
                    />

                    <Autocomplete
                        id="province"
                        options={sexs}
                        getOptionLabel={(option) => option.title}
                        filterOptions={filterOptions}
                        // onChange={(e, value) => props.sort(value?.state ? value.state : 'default')}
                        sx={{
                            width: "100%",
                            outline: "none"
                        }}
                        // size="small"
                        renderInput={(params) => <TextField {...params} label="Province/City" />}
                    />

                    <TextField label="Street/Ward"/>
                    
                    <Stack direction={"row"} spacing={1}>
                        <input type="checkbox"/>

                        <Typography>Set Address Default</Typography>
                    </Stack>
                    
                    <Stack spacing={1}>
                        <Typography>
                            Address type:
                        </Typography>

                        <Stack direction={"row"} spacing={1}>
                            <Button variant="outlined"
                                sx={{
                                    border: `1px solid ${colors.blue[500]}`,
                                    color: "#000",
                                    height: "40px",
                                    width: "80px"
                                }}
                            >
                                Home
                            </Button>

                            <Button variant="outlined"
                                sx={{
                                    border: `1px solid ${colors.orange[900]}`,
                                    color: "#000",
                                    height: "40px",
                                    width: "80px",
                                    "&:hover" : {
                                        border: `1px solid ${colors.orange[800]}`
                                    }
                                }}
                            >
                                Office
                            </Button>
                        </Stack>
                    </Stack>
               </Stack>

               <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    mt: "30px"
                }}>
                    <Stack direction={"row"} spacing={2}>
                        <Button variant="text"
                            sx={{
                                color: "#999",
                            }}
                            onClick={handleCloseModal}
                        >
                            Cancel
                        </Button>

                        <Button variant="contained"
                            sx={{
                                backgroundColor: colors.brown[500],
                                color: "#fff",
                                "&:hover" : {
                                    backgroundColor: colors.brown[400]
                                }
                            }}
                        >
                            Submit
                        </Button>
                    </Stack>
               </Box>
            </Stack>
        </Modal>
    )
}

export default ModalAddAddress;