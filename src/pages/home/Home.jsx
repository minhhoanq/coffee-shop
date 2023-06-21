import React, { useEffect, useState } from "react"

import './home.scss';

import ProductSlide from "../../components/productSlide/ProductSlide";
import Helmet from "../../components/helmet/Helmet";
import ProductList from "../../components/productlist/ProductList";

import products from '../../assets/data/products';

const Home = () => {
    const[sofas, setSofas] = useState([]);
    const[mobiles, setMoblies] = useState([]);
    const[watchs, setWatchs] = useState([]);
    const[wireless, setWireless] = useState([]);
    const[chairs, setChairs] = useState([]);


    useEffect(() => {
        const filterSofas = products.filter((item) => item.category === 'sofa');
        setSofas(filterSofas)

        const filtersetMoblies = products.filter((item) => item.category === 'mobile');
        setMoblies(filtersetMoblies)

        const filterWatchs = products.filter((item) => item.category === 'watch');
        setWatchs(filterWatchs)

        const filterWireless = products.filter((item) => item.category === 'wireless');
        setWireless(filterWireless)

        const filterChairs = products.filter((item) => item.category === 'chair');
        setChairs(filterChairs)
    },[]);

    return (
        <div className="home">
            <ProductSlide/>
            <Helmet/>

            <div className="home__list-product section mb-3">
                <div className="home__list-product__title section__header mb-2">
                    Trending Products
                </div>
                <ProductList items={sofas}/>
            </div>

            <div className="home__list-product section mb-3">
                <div className="home__list-product__title section__header mb-2">
                    New Arrivals
                </div>
                <ProductList items={mobiles}/>
                <ProductList items={watchs}/>
                <ProductList items={wireless}/>
            </div>

            <div className="home__list-product section mb-3">
                <div className="home__list-product__title section__header mb-2">
                    Best Sales
                </div>
                <ProductList items={chairs}/>
            </div>
        </div>
    )
}

export default Home;