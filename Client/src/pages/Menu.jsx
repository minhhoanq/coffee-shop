import { Box, Grid, Pagination, Typography } from "@mui/material";
import Banner from "../components/common/Banner";
import Seach from "../components/common/Search";
import ItemCard from "../components/common/ItemCard";
import { useCallback, useEffect, useState } from "react";
import { getProductsAction } from "../redux/asyncActions/productActions";
import { useSelector, useDispatch } from "react-redux";
import ItemCardHorizontal from "../components/common/ItemCarHorizontal";
import RecommendItemCard from "../components/common/RecommendItemCard";
import { getAllProductRecommend } from "../api/productApi";
// import useDebounce from "../hooks/useDebounce";

const data = [
    {
        slug: "cappuccino-viennese",
        productName: "Cappuccino Viennese",
        productImg: "https://bepos.io/wp-content/uploads/2022/12/cac-loai-thuc-uong-ca-phe-13.jpg"
    },
    {
        slug: "milk-coffee",
        productName: "Milk Coffee",
        productImg: "https://www.cukcuk.vn/wp-content/uploads/2020/04/d1c4de9359726303979fb06d463ac218.jpg"
    },
    {
        slug: "tra-trai-cay-nhiet-doi",
        productName: "Trà trái cây nhiệt đới",
        productImg: "https://bepbanhtiny.com/wp-content/uploads/2023/04/cach-lam-tra-trai-cay-nhiet-doi.jpg"
    },
    {
        slug: "tra-vai-lai",
        productName: "Trà Vải Lài",
        productImg: "https://teashop.vn/wp-content/uploads/2020/12/tra-vai-la-gi.jpg"
    },
    {
        slug: "tra-sua-oren-cake-cream",
        productName: "Trà sữa Oreo Cake Cream",
        productImg: "https://www.cukcuk.vn/wp-content/uploads/2022/06/tra-sua-Oreo-Cake-Cream.jpg"
    },
    {
        slug: "cappuccino-viennese",
        productName: "Cappuccino Viennese",
        productImg: "https://bepos.io/wp-content/uploads/2022/12/cac-loai-thuc-uong-ca-phe-13.jpg"
    },
    {
        slug: "the-salted-coffee",
        productName: "The Salted Coffee",
        productImg: "https://bepos.io/wp-content/uploads/2022/12/cac-thuc-uong-ca-phe-37.jpeg"
    },
]

const Menu = () => {
    const [products, setProducts] = useState([]);
    const [productsRecommed, setProductsRecommed] = useState([]);

    const [searchValue, setSearchValue] = useState("");
    const [sort, setSort] = useState('default');
    const [category, setCategory] = useState();
    const [numPage, setNumPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    // const numbers = [...Array(totalPage + 1).keys()].slice(1);

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.currentUser);

    const getDataRecommed = async () => {
        const result = await getAllProductRecommend();
        setProductsRecommed(result.productsRecommend);
    }

    // console.log(searchValue)

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
            const limit = 12;

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

    useEffect(() => {
        if(user) {
            getDataRecommed();
        }
    },[user])


    const handleSearch = useCallback((search) => {
        setSearchValue(search ? search : searchValue)
    });

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
                    <Typography variant="h5" fontWeight={600}>
                        Recommeded Product
                    </Typography>
                    <Grid container spacing={1} mt={2}>
                        {productsRecommed.map((item, index) => (
                            <>
                                <Grid item lg={4} md={4} sm={6} xs={12}>
                                    <RecommendItemCard item={item} key={index}/>
                                </Grid>
                            </>
                        ))}
                    </Grid>
                </Grid>

                <Grid item xs={10}>
                    <Typography variant="h5" mt={2} fontWeight={600}>
                        There are many other options
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