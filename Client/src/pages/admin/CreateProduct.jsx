import { useEffect, useState } from "react";

import { Autocomplete, Box, Button, Checkbox, IconButton, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, colors, createFilterOptions } from "@mui/material";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { getAllStaff } from "../../api/userApi";
import Breadcrumbs from "../../components/common/Breadcrumbs";

const categories = [
    {
        title: "Coffee",
        state: "1",
    },
    {
        title: "Milk Tea",
        state: "2",
    },
    {
        title: "Tea",
        state: "3",
    },
    {
        title: "Cake",
        state: "4",
    },
]

const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.title,
})

const CreateProduct = () => {
    const [customers, setCustomers] = useState([]);

    const getAllCustomers = async() => {
        const result = await getAllStaff();
        setCustomers(result.data);
    }

    useEffect(() => {
        getAllCustomers()
    }, [])

    return (
        <Box sx={{
            p: "40px",
            backgroundColor: "#f8f9fa",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
        }}>
            <Stack>
                <Typography variant="h6">
                    <Breadcrumbs/>
                </Typography>

                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}  mt={2}>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                        <Typography variant="h4">
                            Create new product
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Box mt={4} sx={{
                width: "100%",
                height: "600px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 10px 0 rgba(0,0,0,.15)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "30px"
            }}>
                <Stack spacing={4}>
                        <TextField label={`Name`} fullWidth
                            name={`name`} 
                            id={`name`}
                            inputProps={{
                                style: {
                                    height: "50px",
                                    padding: '0 10px',
                                }
                            }}
                            sx={{
                                bgcolor: colors.grey[200]
                            }}
                        />
                        <TextField label={`Name`} fullWidth
                            name={`name`} 
                            id={`name`}
                            inputProps={{
                                style: {
                                    height: "50px",
                                    padding: '0 10px',
                                }
                            }}
                            sx={{
                                bgcolor: colors.grey[200]
                            }}
                        />
                        <Autocomplete
                            fullWidth
                            id="filter-category"
                            options={categories}
                            getOptionLabel={(option) => option.title}
                            // onChange={(e, value) => props.category(value?.state ? value.state : "0")}
                            filterOptions={filterOptions}
                            // sx={{
                            //     width: { xl: "200px", lg: "200px", md: "200px", sm: "200px", xs: "60%"},
                            //     outline: "none"
                            // }}
                            size = "large"
                            renderInput={(params) => <TextField {...params} label="Categories" />}
                        />
                        <TextField label={`Price`} fullWidth
                            name={`price`} 
                            id={`price`}
                            inputProps={{
                                style: {
                                    height: "50px",
                                    padding: '0 10px',
                                }
                            }}
                            sx={{
                                bgcolor: colors.grey[200]
                            }}
                        />
                        <TextField label={`Sold`} fullWidth
                            name={`sold`} 
                            id={`sold`}
                            inputProps={{
                                style: {
                                    height: "50px",
                                    padding: '0 10px',
                                }
                            }}
                            sx={{
                                bgcolor: colors.grey[200]
                            }}
                        />
                    </Stack>
                    <Button fullWidth variant="contained" size="large" sx={{
                            bgcolor: colors.blue[700],
                            "&:hover" : {
                                bgcolor: colors.blue[600]
                            }
                        }}>
                            Apply changes
                    </Button>
            </Box>
        </Box>
    )
}

export default CreateProduct;