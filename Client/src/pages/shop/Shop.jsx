import React, { useState, useEffect} from "react";

import './shop.scss';
import PageHeader from "../../components/pageheader/PageHeader";
import ProductList from '../../components/productlist/ProductList';
import products from '../../assets/data/products';
import useDebounce from "../../hooks/useDebounce";

const Shop = () => {

    const[filterProducts, setFilterProducts] = useState(products);
    const[valueSearch, setValueSearch] = useState('');
    const debouncedValue = useDebounce(valueSearch , 800);

    const handleFilter = (e) => {
        const value = e.target.value;

        if(value === 'default') {
            setFilterProducts(filterProducts); 
            return;
        } else {
            const filterItems = filterProducts.filter((item) => item.category === value); 
            setFilterProducts(filterItems); 
            return;
        }
    }

    const handleSearch = (e) => {
        const value = e.target.value;

        setValueSearch(value.trim());
    }

    const handleSort = (e) => {
        const value = e.target.value;

        console.log(value);
        if(value === 'default') {
            setFilterProducts(filterProducts);
            return;
        }

        if(value === 'ascending') {
            const sortItems = filterProducts.sort((item1, item2) => item1.price - item2.price);
            setFilterProducts(sortItems);
            return;
        }
    }

    //Search
    useEffect(() => {
        const searchItems = products.filter(
            item => item.productName.toLowerCase().includes(debouncedValue.toLowerCase())
        );

        setFilterProducts(searchItems);
    },[debouncedValue]);


    return (
        <div className="mb-3" style={{marginTop: '4rem'}}>
            <PageHeader title={'Product Cart'}/>
            <div className="shop">
                <div className="shop__wrapper">
                    <div className="shop__wrapper__selects">
                        <div className="shop__wrapper__selects__filter">
                            <select name="carts" id="carts" onChange={handleFilter}>
                                <option value="default">Filter by category</option>
                                <option value="sofa">Sofa</option>
                                <option value="mobile">Mobile</option>
                                <option value="chair">Chair</option>
                                <option value="watch">Smart Watch</option>
                            </select>
                        </div>

                        <div className="shop__wrapper__selects__sort" >
                            <select name="sort" id="sort" onClick={handleSort}>
                                <option value="default">Sort by</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div>
                    </div>

                    <div className="shop__wrapper__search">
                        <input type="text" placeholder="Search..." onChange={handleSearch}/>
                        <i class="ri-search-line"></i>
                    </div>
                </div>
            </div>

            {
                filterProducts.length > 0 ? (
                    <ProductList items={filterProducts} />
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