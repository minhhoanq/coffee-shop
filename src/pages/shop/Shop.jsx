import React, { useState, useEffect} from "react";

import './shop.scss';
import PageHeader from "../../components/pageheader/PageHeader";
import ProductList from '../../components/productlist/ProductList';
import products from '../../assets/data/products';
import useDebounce from "../../hooks/useDebounce";

const Shop = () => {
    //Static variable view
    const[sofas, setSofas] = useState([]);
    const[mobiles, setMoblies] = useState([]);
    const[watchs, setWatchs] = useState([]);
    const[wireless, setWireless] = useState([]);
    const[chairs, setChairs] = useState([]);

    //Dymanic variable view
    const[filterProducts, setFilterProducts] = useState([]);

    const[valueSearch, setValueSearch] = useState('');

    const debouncedValue = useDebounce(valueSearch , 800);

    const handleFilter = (e) => {
        const value = e.target.value;

        if(value === 'default') {
            setFilterProducts([]); 
            return;
        }

        const filterItems = products.filter((item) => item.category === value); 
        setFilterProducts(filterItems); 
    }

    const handleSearch = (e) => {
        const value = e.target.value;

        setValueSearch(value);
    }

    //console.log(filterProducts);

    //Filter
    useEffect(() => {
        const filterSofas = products.filter((item) => item.category === 'sofa');
        setSofas(filterSofas);

        const filtersetMoblies = products.filter((item) => item.category === 'mobile');
        setMoblies(filtersetMoblies);

        const filterWatchs = products.filter((item) => item.category === 'watch');
        setWatchs(filterWatchs);

        const filterWireless = products.filter((item) => item.category === 'wireless');
        setWireless(filterWireless);

        const filterChairs = products.filter((item) => item.category === 'chair');
        setChairs(filterChairs);
    },[]);

    //Search
    useEffect(() => {
        // if(debouncedValue === '') {
        //     setFilterProducts([]);
        //     return;
        // }
        const searchItems = products.filter(
            item => item.productName.toLowerCase().includes(debouncedValue.toLowerCase())
        );

        console.log(searchItems);

        setFilterProducts(searchItems);
    },[debouncedValue]);


    return (
        <div className="mb-3">
            <PageHeader title={'Product Cart'}/>
            <div className="shop">
                <div className="shop__wrapper">
                    <div className="shop__wrapper__selects">
                        <div className="shop__wrapper__selects__filter">
                            <select name="carts" id="carts" onClick={handleFilter}>
                                <option value="default">Filter by category</option>
                                <option value="sofa">Sofa</option>
                                <option value="mobile">Mobile</option>
                                <option value="chair">Chair</option>
                                <option value="watch">Smart Watch</option>
                            </select>
                        </div>

                        <div className="shop__wrapper__selects__sort">
                            <select name="sort" id="sort">
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
            
            <ProductList items={filterProducts} />
        </div>


    )
}

export default Shop;