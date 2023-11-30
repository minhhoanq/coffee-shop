import { useEffect, useState } from "react";

import { Box, Checkbox, IconButton, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, colors } from "@mui/material";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { getAllUsers } from "../../api/userApi";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserActions } from "../../redux/asyncActions/userActions";

const Order = () => {
    const [customers, setCustomers] = useState([]);
    const isFetching = useSelector(state => state.auth.isPending);
    const [id, setId] = useState();
    const [name, setName] = useState("");
    const [pageUser, setPageUser] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async() => {
            let page = pageUser;
            const limit = 6;
            const roles = 2;

            // if(id !== "" && id !== 0) {
            //     idProduct = id;
            // }
            
            const userList = await dispatch(getAllUserActions({page, limit, name, id, roles}));
            setCustomers(userList.payload?.data?.rows || []);
            console.log(userList)

            const quantityPage = Math.ceil((userList.payload?.count || 0) / limit);
            setTotalPage(quantityPage);
        }
        getData();
    },[pageUser, name, id]);

    console.log(customers)

    const handleChange = (e, value) => {
        setPageUser(value)
    }

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
                                <TableCell sx={{ fontWeight: 600 }}>ID</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Customer</TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="right">Delivery Address</TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="right">Status</TableCell>
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
                                    993
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <Typography color={colors.blue[700]}>
                                        {customer.username}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">56766 Kleinstead 95139</TableCell>
                                <TableCell align="right">
                                    <IconButton
                                    size="small"
                                        sx={{
                                            borderRadius: "20px",
                                            backgroundColor: colors.green[100],
                                            color: colors.green[600],
                                            fontSize: "1.1rem",
                                            width: "100px"
                                        }}
                                    >
                                        Completed
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right">2023-11-06T02:05:26.000Z</TableCell>
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
                        count={totalPage}
                        page={pageUser}
                        onChange={handleChange}
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

export default Order;