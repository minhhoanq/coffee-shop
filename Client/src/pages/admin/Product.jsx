import { useEffect, useState } from "react";

import { Box, Checkbox, CircularProgress, IconButton, Menu, MenuItem, Modal, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, colors } from "@mui/material";
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
import { useDispatch, useSelector } from "react-redux";

const options = [
    {
        title: "Chi tiết",
    },
    {
        title: "Sửa",
    },
]

const Product = () => {
    const [products, setProducts] = useState([]);
    const [showModalFilter, setShowModalFilter] = useState(false);
    const isFetching = useSelector(state => state.product.isPending);
    const [id, setId] = useState();
    const [name, setName] = useState("");
    const [category, setCategory] = useState();
    const [price, setPrice] = useState(undefined);
    const [sold, setSold] = useState(0);
    const [pageProduct, setPageProduct] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const dispatch = useDispatch();
    const [openOptions, setOpenOptions] = useState({
        title: "",
        bool: false
    });

    const handleClose = () => {
        // setAnchorEl(null);
    };
    
    //Handle page
    useEffect(() => {
        const getData = async() => {
            let page = pageProduct;
            const limit = 6;

            let categoryId = undefined;
            let priceProduct = undefined;
            let idProduct = undefined;
            let soldProduct = undefined;

            if(category !== "0") {
                categoryId = category;
            }

            if(price !== "") {
                priceProduct = price;
            }

            if(id !== "" && id !== 0) {
                idProduct = id;
            }

            if(sold !== 0) {
                soldProduct = sold;
            }
            
            const productList = await dispatch(getProductsAction({name, page, limit, categoryId, priceProduct, idProduct, soldProduct}));
            setProducts(productList.payload?.rows || []);
            console.log(productList)

            const quantityPage = Math.ceil((productList.payload?.count || 0) / limit);
            setTotalPage(quantityPage);
        }
        getData();
    },[ category, pageProduct, name, price, id, sold]);

    const handleChange = (e, value) => {
        setPageProduct(value)
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
            // maxHeight: "100vh",
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
                // height: "610px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 10px 0 rgba(0,0,0,.15)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "auto",
                position: "relative"
            }}>
                <TableContainer sx={{
                    height: 580
                }}>
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
                                <TableCell align="right">{product.l}</TableCell>
                                <TableCell align="right">{product.sold}</TableCell>
                                <TableCell align="right">{product.sold > 0 ? "Còn hàng" : "Hết hàng"}</TableCell>
                                <TableCell align="right">{product.updatedAt}</TableCell>
                                <TableCell align="right">
                                    <IconButton
                                        id="demo-positioned-button"
                                        // aria-controls={open ? 'demo-positioned-menu' : undefined}
                                        aria-haspopup="true"
                                        onClick={() => setOpenOptions({
                                            title: product.slug,
                                            bool: !openOptions.bool
                                        })}
                                        sx={{
                                            height: "50%",
                                            position: "relative"
                                        }}
                                        >
                                        <MoreHorizIcon/>
                                        <Box sx={{
                                            position: "absolute",
                                            top: 30,
                                            right: 30,
                                            border: "1px solid #ccc",
                                            p: "5px 0",
                                            width: "80px",
                                            backgroundColor: "#fff",
                                            boxShadow: "0 2px 10px 0 rgba(0,0,0,.15)",
                                            zIndex: "1000",
                                            borderRadius: "4px",
                                            visibility: openOptions.title === product.slug && openOptions.bool === true ? "" : "hidden"
                                        }}>
                                            <Stack justifyContent={"center"} alignItems={"center"} >
                                                <Link to={`/dashboard/products/${product.slug}`} style={{
                                                    cursor: "pointer",
                                                    width: "100%",
                                                    height: "30px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    "&:hover": {
                                                        backgroundColor: "#ccc"
                                                    }
                                                }}>
                                                    <Typography sx={{
                                                        cursor: "pointer",
                                                        width: "100%",
                                                        height: "30px",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        "&:hover": {
                                                            backgroundColor: "#ccc"
                                                        },
                                                        color: "#000"
                                                    }}>
                                                        Chi tiết
                                                    </Typography>
                                                </Link>
                                                <Typography sx={{
                                                    cursor: "pointer",
                                                    width: "100%",
                                                    height: "30px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    "&:hover": {
                                                        backgroundColor: "#ccc"
                                                    },
                                                    color: "#000"
                                                }}>
                                                    Báo cáo
                                                </Typography>
                                            </Stack>
                                        </Box>
                                    </IconButton>
                                    
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* Loading */}
                {isFetching && (
                        <Stack
                            alignItems={"center"}
                            justifyContent={"center"}
                            sx={{
                                height: "100%",
                                width: "100%",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bgcolor: colors.common.white,
                                zIndex: 1000
                            }}
                        >
                            <Box position={"relative"}>
                                <CircularProgress />
                            </Box>
                        </Stack>
                    )}
                    {/* Loading */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        padding: "20px",
                    }}
                >
                    <Pagination 
                        count={totalPage}
                        page={pageProduct}
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