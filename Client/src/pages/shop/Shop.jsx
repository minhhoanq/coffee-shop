import React, { useState, useEffect} from "react";

import './shop.scss';
import PageHeader from "../../components/pageheader/PageHeader";
import ProductList from '../../components/productlist/ProductList';
import useDebounce from "../../hooks/useDebounce";
import { getProducts } from "../../api/productApi";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch } from "react-redux";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [sort, setSort] = useState('');
    const [idOfCate, setIdOfCate] = useState(0);
    const [numPage, setNumPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const numbers = [...Array(totalPage + 1).keys()].slice(1);
    const debounceValue = useDebounce(searchValue, 800);

    const dispatch = useDispatch();

    useEffect(() => {
        const getData = () => {
            const name = debounceValue;
            const page = numPage;
            let order = [];
            if(sort && sort != 'default') {
                order = ["price", sort];
            } else {
                order = undefined;
            }
            const limit = 5;

            let categoryId = undefined;

            if(idOfCate) {
                categoryId = idOfCate;
            }
            
            const productList = dispatch(getProducts(name, order, page, limit, categoryId));
            setProducts(productList.productData.rows);

            const quantityPage = Math.ceil(productList.productData.count / limit);
            setTotalPage(quantityPage);
        }
        getData();
    },[debounceValue, sort, idOfCate, numPage]);

    const searchProduct = (e) => {
        setSearchValue(e.target.value);
    };

    const handleFilter = (e) => {
        const selected = e.target.value;
        setIdOfCate(Number(selected));
    }

    const handleSort = (e) => {
        const selected = e.target.value;
        setSort(selected);
    }

    const handlePagination = (numberPage) => {
        setNumPage(numberPage);
    }

    return (
        <div className="mb-3" style={{marginTop: '4rem', width: '100%'}}>
            <PageHeader title={'Product Cart'}/>
            <div className="shop grid wide">
                <div className="shop__wrapper col">
                    <div className="shop__wrapper__selects">
                        <div className="shop__wrapper__selects__filter">
                            <select name="carts" id="carts" onChange={handleFilter}>
                                <option value="default">Chọn loại sản phẩm</option>
                                <option value="1">Cà phê</option>
                                <option value="2">Trà</option>
                                <option value="3">Trà sữa</option>
                                <option value="4">Sinh tố</option>
                            </select>
                        </div>

                        <div className="shop__wrapper__selects__sort" >
                            <select name="sort" id="sort" onChange={handleSort}>
                                <option value="default">Sắp xếp giá</option>
                                <option value="asc">Giá từ thấp đến cao</option>
                                <option value="desc">Giá từ cao đến thấp</option>
                            </select>
                        </div>
                    </div>

                    <div className="shop__wrapper__search">
                        <input type="text" placeholder="Search..." onChange={searchProduct}/>
                        <i class="ri-search-line"></i>
                    </div>
                </div>
            </div>

            {
                products.length > 0 ? (
                    <>
                        <ProductList items={products} />
                        <Pagination parentCallback={handlePagination} numbers={numbers}/>
                    </>
                ) : 
                (
                    <div className="no-product">
                        <i class="ri-emotion-sad-line"></i>
                        No Products...
                    </div>
                )
            }

            
        </div>
    )
}

export default Shop;