import React from "react"

import './home.scss';

import ProductSlide from "../../components/productSlide/ProductSlide";
import Helmet from "../../components/helmet/Helmet";

const Home = () => {
    return (
        <div className="home">
            <ProductSlide/>
            <Helmet/>
        </div>
    )
}

export default Home;