import { useEffect, useState } from "react";

import { Box, Checkbox, IconButton, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { getAllUsers } from "../../api/userApi";
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

const Category = () => {
    const [categories, setCategories] = useState([]);

    const getAllCategories = async() => {
        const result = await getAllUsers();
        setCategories(result.data);
    }

    useEffect(() => {
        getAllCategories()
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
                            Categories
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
                                <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="right">ID</TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="right">Updated</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {categories.map((categories, index) => (
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
                                <TableCell component="th" scope="row">
                                    {categories.username}
                                </TableCell>
                                <TableCell align="right">{categories.id}</TableCell>
                                <TableCell align="right">{categories.updatedAt}</TableCell>
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

export default Category;