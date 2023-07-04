import React, { useState, useEffect} from "react";

import './shop.scss';
import PageHeader from "../../components/pageheader/PageHeader";
import ProductList from '../../components/productlist/ProductList';
import useDebounce from "../../hooks/useDebounce";
import { getAllProduct } from "../../redux/slice/apiRequest";

const Shop = () => {
    const [products, setProducts] = useState([]);
    // const[filterProducts, setFilterProducts] = useState(products);
    // const[valueSearch, setValueSearch] = useState('');
    // const debouncedValue = useDebounce(valueSearch , 800);

    // const handleFilter = (e) => {
    //     const value = e.target.value;

    //     if(value === 'default') {
    //         setFilterProducts(filterProducts); 
    //         return;
    //     } else {
    //         const filterItems = filterProducts.filter((item) => item.category === value); 
    //         setFilterProducts(filterItems); 
    //         return;
    //     }
    // }

    // const handleSearch = (e) => {
    //     const value = e.target.value;

    //     setValueSearch(value.trim());
    // }

    // const handleSort = (e) => {
    //     const value = e.target.value;

    //     console.log(value);
    //     if(value === 'default') {
    //         setFilterProducts(filterProducts);
    //         return;
    //     }

    //     if(value === 'ascending') {
    //         const sortItems = filterProducts.sort((item1, item2) => item1.price - item2.price);
    //         setFilterProducts(sortItems);
    //         return;
    //     }
    // }

    // //Search
    // useEffect(() => {
    //     const searchItems = products.filter(
    //         item => item.productName.toLowerCase().includes(debouncedValue.toLowerCase())
    //     );

    //     setFilterProducts(searchItems);
    // },[debouncedValue]);

    useEffect(() => {
        const getData = async() => {
            const productList = await getAllProduct();
            setProducts(productList.data);
        }
        getData();

    },[])

    return (
        <div className="mb-3" style={{marginTop: '4rem'}}>
            <PageHeader title={'Product Cart'}/>
            <div className="shop">
                <div className="shop__wrapper">
                    <div className="shop__wrapper__selects">
                        <div className="shop__wrapper__selects__filter">
                            <select name="carts" id="carts">
                                <option value="default">Filter by category</option>
                                <option value="sofa">Sofa</option>
                                <option value="mobile">Mobile</option>
                                <option value="chair">Chair</option>
                                <option value="watch">Smart Watch</option>
                            </select>
                        </div>

                        <div className="shop__wrapper__selects__sort" >
                            <select name="sort" id="sort">
                                <option value="default">Sort by</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div>
                    </div>

                    <div className="shop__wrapper__search">
                        <input type="text" placeholder="Search..."/>
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