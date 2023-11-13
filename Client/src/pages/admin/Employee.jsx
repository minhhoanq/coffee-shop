import { Box, IconButton, Stack, Typography } from "@mui/material";

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Employee = () => {
    return (
        <Box sx={{
            p: "40px"
        }}>
            <Stack>
                <Typography variant="h6">
                    Dashboard / Employee
                </Typography>

                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}  mt={2}>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                        <Typography variant="h4">
                            Employees
                        </Typography>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "1px solid #3040d6",
                            borderRadius: "50px",
                            width: "40px",
                            height: "25px",
                            color: "#3040d6"
                        }}>
                            400
                        </Box>
                    </Stack>
                    <Stack direction={"row"} spacing={3}>
                        <IconButton sx={{
                            width: "150px",
                            border: "1px solid #3040d6",
                            borderRadius: "2px",
                            color: "#3040d6",

                        }}>
                            <GroupAddIcon/>
                            <Typography sx={{
                                marginLeft: "10px"
                            }}>
                                Create new
                            </Typography>
                        </IconButton>
                        <IconButton sx={{
                            width: "100px",
                            border: "1px solid #3040d6",
                            borderRadius: "2px",
                            color: "#3040d6",

                        }}>
                            <FilterAltIcon/>
                            <Typography sx={{
                                marginLeft: "10px"
                            }}>
                                Filter
                            </Typography>
                        </IconButton>
                    </Stack>
                </Stack>
            </Stack>

        </Box>
    )
}

export default Employee;