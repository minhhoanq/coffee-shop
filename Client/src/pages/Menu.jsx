import { Box, Grid, Pagination } from "@mui/material";
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
    const [sort, setSort] = useState('');
    const [idOfCate, setIdOfCate] = useState(0);
    const [numPage, setNumPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const numbers = [...Array(totalPage + 1).keys()].slice(1);
    // const debounceValue = useDebounce(searchValue, 800);

    const dispatch = useDispatch();
    const pending = useSelector(state => state.product.isPending);
    const error = useSelector(state => state.product.isError);
    console.log(pending + " : " + error);
    console.log(products)
    console.log(searchValue)

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

            if(idOfCate) {
                categoryId = idOfCate;
            }
            
            const productList = await dispatch(getProductsAction({name, order, page, limit, categoryId}));
            setProducts(productList.payload?.rows || []);

            const quantityPage = Math.ceil((productList.payload?.count || 0) / limit);
            setTotalPage(quantityPage);
        }
        getData();
    },[searchValue, sort, idOfCate, numPage]);

    const handleSearch = useCallback((search) => {
        setSearchValue(search ? search : searchValue)
    }, [])

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
                    <Seach search={handleSearch}/>
                </Grid>

                <Grid item xs={10}>
                    <Grid container justifyContent="flex-start" spacing={6}>
                        {products.map((item, index) => (
                            <Grid key={index} item lg={3} md={4} sm={6} xs={12} ><ItemCard item={item}/></Grid>
                        ))}
                    </Grid>
                </Grid>

                <Grid item xs={10} display={"flex"} justifyContent={"flex-end"}>
                    <Pagination count={numbers} sx={{
                        mt: "40px"
                    }}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Menu;