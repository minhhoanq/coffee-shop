import { Box, Grid, Pagination, Typography } from "@mui/material";
import Banner from "../components/common/Banner";
import Seach from "../components/common/Search";
import ItemCard from "../components/common/ItemCard";
import { useCallback, useEffect, useState } from "react";
import { getProductsAction } from "../redux/asyncActions/productActions";
import { useSelector, useDispatch } from "react-redux";
// import useDebounce from "../hooks/useDebounce";

const Menu = () => {
    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [sort, setSort] = useState('default');
    const [category, setCategory] = useState();
    const [numPage, setNumPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    // const numbers = [...Array(totalPage + 1).keys()].slice(1);

    const dispatch = useDispatch();
    const pending = useSelector(state => state.product.isPending);
    const error = useSelector(state => state.product.isError);

    useEffect(() => {
        const getData = async() => {
            const name = searchValue.trim();
            const page = numPage;
            let order = [];
            if(sort && sort != 'default') {
                order = ["price", sort];
            } else {
                order = undefined;
            }
            const limit = 7;

            let categoryId = undefined;

            if(category !== "0") {
                categoryId = category;
            }
            
            const productList = await dispatch(getProductsAction({name, order, page, limit, categoryId}));
            setProducts(productList.payload?.rows || []);

            const quantityPage = Math.ceil((productList.payload?.count || 0) / limit);
            setTotalPage(quantityPage);
        }
        getData();
    },[searchValue, sort, category, numPage]);

    const handleSearch = useCallback((search) => {
        setSearchValue(search ? search : searchValue)
    }, []);

    const handleSort = useCallback((data) => {
        setSort(data ? data : sort)
    })

    const handleCategory = useCallback((data) => {
        setCategory(data ? data : category)
    })

    const handleChange = (e, value) => {
        setNumPage(value)
    }

    return (
        <Box >
            <Banner/>
            <Grid container 
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Grid item xs={10} >
                    <Seach search={handleSearch} sort={handleSort} category={handleCategory}/>
                </Grid>

                <Grid item xs={10}>
                    <Box
                        sx={{
                            height: "200px",
                            border: "1px solid #ccc"
                        }}
                    >
                        Làm thông minh ở đây
                    </Box>
                </Grid>

                <Grid item xs={10}>
                    <Typography variant="h5" mt={2}>
                        Còn nhiều lựa chọn khác
                    </Typography>
                    <br/>
                    <Grid container justifyContent="flex-start" spacing={6}>
                        {products.map((item, index) => (
                            <Grid key={index} item lg={3} md={4} sm={6} xs={12} ><ItemCard item={item}/></Grid>
                        ))}
                    </Grid>
                </Grid>

                <Grid item xs={10} display={"flex"} justifyContent={"flex-end"}>
                    <Pagination 
                        count={totalPage}
                        page={numPage}
                        onChange={handleChange}
                        sx={{
                            mt: "40px"
                        }}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Menu;