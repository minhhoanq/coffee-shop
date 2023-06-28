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
import request from "../../utils/request";
import { loginSuccess } from "../../redux/slice/authSlice";

const Home = () => {
    const[sofas, setSofas] = useState([]);
    const[mobiles, setMoblies] = useState([]);
    const[watchs, setWatchs] = useState([]);
    const[wireless, setWireless] = useState([]);
    const[chairs, setChairs] = useState([]);

    const axiosJWT = axios.create();
    const user = useSelector(state => state.auth.login.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!user) {
            navigate('/login');
        }
    },[]);

    const refreshToken = async () => {
        try {
            const res = await request.post("/v1/auth/refresh", {
                withCredentials: true,
            });
            return res.data;
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    axiosJWT.interceptors.request.use(
        async(config) => {
            const decodedToken = jwt_decode(user.accessToken);
            let date = new Date();
            if(decodedToken.exp < date.getTime() / 1000) {
                const data = await refreshToken();
                const refreshUser = {
                    ...user,
                    accessToken: data.accessToken,
                };
                dispatch(loginSuccess(refreshUser));
                config.headers["token"] =  "Bearer" +  data.accessToken;
            }
            return config;
        }, (err) => {
            return Promise.reject(err);
        }
    );


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