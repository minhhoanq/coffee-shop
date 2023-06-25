import React from "react";

import './product-slide.scss';

import counter_timer from '../../assets/images/counter-timer-img.png';
import hero from '../../assets/images/hero-img.png';
import sofa1 from '../../assets/images/double-sofa-01.png';
import sofa2 from '../../assets/images/double-sofa-02.png';

import Button from "../button/Button";

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const itemSlide = [
    hero, counter_timer, sofa1, sofa2
];

const ProductSlide = () => {

    SwiperCore.use([Autoplay]);

    return (
        <div className="product-slide">
            <Swiper
               modules = {[Autoplay]}
               grabCursor={true}
               spaceBetween={0}
               slidesPerView={1}
               //autoplay={{delay: 3000}}
            >
                {
                    itemSlide.map((item, i) => (
                        <SwiperSlide key = {i}>
                            {({ isActive }) => (
                                <ProductSlideItem item = {item} className={isActive ? 'active' : ''}/>
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export const ProductSlideItem = props => {

    const item = props.item;

    return (
        <div className={`product-slide-item ${props.className}`}>
            <div className="product-slide-item__wrapper">
                <div className="product-slide-item__wrapper__content">
                    <span className="product-slide-item__wrapper__content__type">Trending product 2023</span>
                    <h1 className="product-slide-item__wrapper__content__title">Make Your Interior More Minimalistic & Modern</h1>
                    <span className="product-slide-item__wrapper__content__overview">Loren ipsum dolor sit amet consectetur, adipisicing elit. Quaerat nulla repellat quo eaque alias corporis sunt, facilis nesciunt rem fugit</span>
                    <Button>SHOP NOW</Button>
                </div>

                <div className="product-slide-item__wrapper__img">
                    <img src={item} alt=""/>
                </div>
            </div>
        </div>
    );
}


export default ProductSlide;