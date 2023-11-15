import { useEffect, useState } from "react";

import { Box, Checkbox, IconButton, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { getAllStaff } from "../../api/userApi";
import Breadcrumbs from "../../components/common/Breadcrumbs";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen', 159, 6.0, 24, 4.0),
    createData('Ice', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Customer = () => {
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
                            Customers
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
            <Box mt={4} sx={{
                width: "100%",
                height: "600px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 10px 0 rgba(0,0,0,.15)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}>
                <TableContainer >
                    <Table sx={{ minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><Checkbox id="checkedAll"/></TableCell>
                                <TableCell></TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="right">ID</TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="right">Position</TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="right">Updated</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {customers.map((customer, index) => (
                            <TableRow
                            key={index}
                            sx={{ 
                                '&:last-child td, &:last-child th': { border: 0 },
                            }}
                            >
                                <TableCell>
                                    <Checkbox
                                        // onChange={handleCheckAll}
                                        id={"checkedItem"}
                                    />
                                    </TableCell>
                                <TableCell >
                                    <img
                                        height={40}
                                        style={{
                                            borderRadius: "50px"
                                        }}
                                        src="data:image/jpeg;base64,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"/>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {customer.username}
                                </TableCell>
                                <TableCell align="right">{customer.id}</TableCell>
                                <TableCell align="right">{customer.roles}</TableCell>
                                <TableCell align="right">{customer.updatedAt}</TableCell>
                                <TableCell align="right">
                                    <IconButton>
                                        <MoreHorizIcon/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        padding: "20px",
                    }}
                >
                    <Pagination 
                        count={2}
                        page={1}
                        // onChange={handleChange}
                        sx={{
                            // position: "absolute",
                            // bottom: "10px",
                            // right: "10px"
                        }}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Customer;