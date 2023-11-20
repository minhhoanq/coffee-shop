import { useEffect, useState } from "react";

import { Box, Checkbox, IconButton, Menu, MenuItem, Modal, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {  getProducts } from "../../api/productApi";
import { Link, useLocation } from "react-router-dom";
import ModalAddAddress from "../../components/common/ModalAddAddress";
import ModalAddProduct from "../../components/common/ModalAddProduct";
import ModalFilter from "../../components/common/ModalFilter";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import { getProductsAction } from "../../redux/asyncActions/productActions";
import { useDispatch } from "react-redux";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [showModalFilter, setShowModalFilter] = useState(false);

    const [id, setId] = useState();
    const [name, setName] = useState("");
    const [category, setCategory] = useState();
    const [price, setPrice] = useState(undefined);
    const [sold, setSold] = useState(0);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const dispatch = useDispatch();

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    //Handle page
    useEffect(() => {
        const getData = async() => {
            let pagePicked = page;
            const limit = 6;

            let categoryId = undefined;
            let priceProduct = undefined;
            let idProduct = undefined;
            let soldProduct = undefined;

            if(category !== "0") {
                categoryId = category;
                pagePicked = 1;
            }

            if(price !== "") {
                priceProduct = price;
                pagePicked = 1;
            }

            if(id !== "" && id !== 0) {
                idProduct = id;
                pagePicked = 1;
            }

            if(sold !== 0) {
                soldProduct = sold;
                pagePicked = 1;
            }
            
            const productList = await dispatch(getProductsAction({name, pagePicked, limit, categoryId, priceProduct, idProduct, soldProduct}));
            setProducts(productList.payload?.rows || []);

            const quantityPage = Math.ceil((productList.payload?.count || 0) / limit);
            setTotalPage(quantityPage);
        }
        getData();
    },[ category, page, name, price, id, sold]);

    const handleChange = (e, value) => {
        setPage(value)
    }

    const setDataFilter = (data) => {
        console.log(data)
        setCategory(data.category?.state);
        setName(data?.name);
        setPrice(data?.price);
        setId(data?.id);
        setSold(Number(data?.sold));
    }

    return (
        <Box sx={{
            p: "40px",
            backgroundColor: "#f8f9fa",
            maxHeight: "100vh",
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
                            Products
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

                        }}
                        // onClick={() => setShowModalCreateProduct(true)}
                        >
                            <GroupAddIcon/>
                            <Typography sx={{
                                marginLeft: "10px"
                            }}>
                                <Link
                                    to={'/dashboard/products/create'} style={{
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        textDecoration: "none",
                                        color: "rgba(0, 0, 0, 0.8)",
                                        "&:hover" : {
                                            color: "#000"
                                        }
                                    }}
                                >
                                    Create new
                                </Link>
                            </Typography>
                        </IconButton>
                            {/* <ModalAddProduct open={showModalCreateProduct} close={() => setShowModalCreateProduct(false)}/> */}
                        <IconButton sx={{
                            width: "100px",
                            border: "1px solid #3040d6",
                            borderRadius: "2px",
                            color: "#3040d6",

                        }}
                        
                        onClick={() => setShowModalFilter(true)}
                        >
                            <FilterAltIcon/>
                            <Typography sx={{
                                marginLeft: "10px"
                            }}
                            >
                                Filter
                            </Typography>
                        </IconButton>
                        <ModalFilter data={setDataFilter} open={showModalFilter} close={() => setShowModalFilter(false)}/>
                    </Stack>
                </Stack>
            </Stack>
            <Box mt={2} sx={{
                width: "100%",
                height: "610px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 10px 0 rgba(0,0,0,.15)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "auto"
            }}>
                <TableContainer >
                    <Table sx={{ minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><Checkbox id="checkedAll"/></TableCell>
                                <TableCell></TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="right">Price</TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="right">Sold</TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="right">Status</TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="right">Updated</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {products.map((product, index) => (
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
                                        width={40}
                                        style={{
                                            borderRadius: "50px"
                                        }}
                                        src={product.productImg}/>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {product.productName}
                                </TableCell>
                                <TableCell align="right">{product.price}</TableCell>
                                <TableCell align="right">{product.sold}</TableCell>
                                <TableCell align="right">{product.sold > 0 ? "Còn hàng" : "Hết hàng"}</TableCell>
                                <TableCell align="right">{product.updatedAt}</TableCell>
                                <TableCell align="right">
                                    <IconButton
                                        id="demo-positioned-button"
                                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                        sx={{height: "50%"}}
                                        >
                                        <MoreHorizIcon/>
                                    </IconButton>
                                    <Menu
                                        id="demo-positioned-menu"
                                        aria-labelledby="demo-positioned-button"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        >
                                            <MenuItem>Xóa</MenuItem>
                                            <MenuItem>Báo cáo</MenuItem>
                                    </Menu>
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
                        page={page}
                        onChange={handleChange}
                        sx={{
                            // mt: "40px"
                        }}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Product;