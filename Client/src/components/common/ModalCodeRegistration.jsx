import { Box, Button, Modal, Stack, TextField, Typography, colors } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { finalRegister } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ModalCodeRegistration = props => {
    const [token, setToken] = useState();
    const navigate = useNavigate();
    
    const handleCoderegistration = async (e) => {
        e.preventDefault();
        if(token === "" || token === undefined) setToken("")
        else {
            const submitCode = await finalRegister(token);
            // console.log(submitCode);
            props.close(false)
            setToken('');
            Swal.fire('', submitCode.data.mes, 'success')
                .then((result) => {
                    if(result.isConfirmed) {
                        props.isLoggedIn(true);
                        navigate('/login')
                    }
                })
        }
    }

    return (
        <Modal
            open={props.open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 500,
                    minHeight: 200,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    p: 2,
                    outline: "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly"
                }}  
                
            >
                <Stack spacing={0}>
                    <Typography id="modal-modal-title" variant="h5" component="h2" fontWeight={600} color={colors.brown[500]}>
                        Registration code
                    </Typography>

                    <Typography id="modal-modal-content" fontSize={"1.2rem"}>
                        Check your email and enter the registration code here
                    </Typography>
                </Stack>

                <Stack>
                    <TextField label="Code" fullWidth
                        onChange={(e) => setToken(e.target.value)}
                    />
                    <Typography color={"error"}>{token === "" ? "Enter Code" : ""}</Typography>
                </Stack>

                <Stack spacing={1} direction={"row"} justifyContent={"flex-end"}>
                    <Button variant="contained"
                        onClick={handleCoderegistration}
                        sx={{
                            bgcolor: colors.brown[500],
                            "&:hover" : {
                                bgcolor: colors.brown[400]
                            }
                        }}
                    >
                        Submit
                    </Button>
                    <Button variant="outlined"
                        onClick={()=> props.close(false)}
                        sx={{
                            border: `1px solid ${colors.red[600]}`,
                            color: colors.red[600],
                            "&:hover" : {
                                border: `1px solid ${colors.red[400]}`,
                            }
                        }}
                    >
                        Cancel
                    </Button>
                </Stack>
                    
            </Box>
        </Modal>
    )
}

export default ModalCodeRegistration;