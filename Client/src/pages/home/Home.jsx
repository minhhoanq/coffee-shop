import React, { useEffect, useState } from "react"

import './home.scss';

import ProductSlide from "../../components/productSlide/ProductSlide";
import Helmet from "../../components/helmet/Helmet";
import ProductList from "../../components/productlist/ProductList";

import products from '../../assets/data/products';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../redux/slice/authSlice";
import Origin from "../../components/origin/Origin";
import Overview from "../../components/overview/Overview";

const Home = () => {
    const user = useSelector(state => state.auth.login?.currentUser);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user) {
            navigate('/login');
        }
    },[]);

    return (
        <div className="home">
            <ProductSlide/>

            <Origin/>

            <Overview/>
        </div>
    )
}

export default Home;