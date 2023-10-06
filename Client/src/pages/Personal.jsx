import { Box, IconButton, Stack, Typography, colors } from "@mui/material"
import { useSelector } from "react-redux";

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const Personal = () => {
    const user = useSelector(state => state.auth.currentUser);

    return (
        <Box pl={2} pr={2}>
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
                        backgroundColor: colors.brown[500]
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
                    
                </Box>
            </Stack>
        </Box>
    )
}

export default Personal;