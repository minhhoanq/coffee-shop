import React, { useState, useEffect} from "react";

import './shop.scss';
import PageHeader from "../../components/pageheader/PageHeader";
import ProductList from '../../components/productlist/ProductList';
import useDebounce from "../../hooks/useDebounce";
import { getProducts } from "../../redux/slice/apiRequest";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [sort, setSort] = useState('');

    const debounceValue = useDebounce(searchValue, 800);

    useEffect(() => {
        const getData = async() => {
            const name = debounceValue;
            const page = 0;
            let order = [];
            if(sort) {
                order = ["price", sort];
            } else {
                order = undefined;
            }
            const limit = 6;
            const productList = await getProducts(name, page, order, limit);
            setProducts(productList.data.rows);
        }
        getData();
    },[debounceValue, sort]);


    const searchProduct = (e) => {
        setSearchValue(e.target.value);
    };

    const handleFilter = (e) => {
        // const selected = e.target.value;
        // if(selected === 'default') {
        //     setProductsSearch(products);
        //     return;
        // }

        // const productsFilter = products.filter( item => item.categoryId === Number(selected));
        // setProductsSearch(productsFilter);
    }

    const handleSort = (e) => {
        const selected = e.target.value;
        setSort(selected);
    }

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
                    <ProductList items={products} />
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