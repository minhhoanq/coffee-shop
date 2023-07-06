import React, { useState, useEffect} from "react";

import './shop.scss';
import PageHeader from "../../components/pageheader/PageHeader";
import ProductList from '../../components/productlist/ProductList';
import useDebounce from "../../hooks/useDebounce";
import { getAllProduct } from "../../redux/slice/apiRequest";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [productsSearch, setProductsSearch] = useState([]);

    useEffect(() => {
        const getData = async() => {
            const productList = await getAllProduct();
            setProducts(productList.data);
            setProductsSearch(productList.data);
        }
        getData();
    },[]);

    const debounceValue = useDebounce(searchValue, 800);

    const searchProduct = (e) => {
        setSearchValue(e.target.value);
    };

    useEffect(() => {
        const resultArr = products.filter(item => 
            item.productName.toLowerCase().includes(debounceValue.toLowerCase())
        );
        setProductsSearch(resultArr);
    },[debounceValue]);

    const handleFilter = (e) => {
        const selected = e.target.value;
        if(selected === 'default') {
            setProductsSearch(products);
            return;
        }

        const productsFilter = products.filter( item => item.categoryId === Number(selected));
        setProductsSearch(productsFilter);
    }

    // const handleSort = (e) => {
    //     const selected = e.target.value;

    //     if(selected === 'default') {
    //         setProductsSearch([]);
    //     }

    //     const productsSort = productsSearch.sort((a, b) => {return a.productName - b.productName});
    //     setProductsSearch(productsSort);
    // }

    return (
        <div className="mb-3" style={{marginTop: '4rem'}}>
            <PageHeader title={'Product Cart'}/>
            <div className="shop">
                <div className="shop__wrapper">
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

                        <div className="shop__wrapper__selects__sort">
                            <select name="sort" id="sort">
                                <option value="default">Sắp xếp giá</option>
                                <option value="ascending">Giá từ thấp đến cao</option>
                                <option value="descending">Giá từ cao đến thấp</option>
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
                    <ProductList items={productsSearch} />
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