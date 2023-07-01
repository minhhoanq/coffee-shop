import React from "react";

import './product-slide.scss';

import coffee_slide_1 from '../../assets/coffee_slide/coffeebanner_1.jpg';
import coffee_slide_2 from '../../assets/coffee_slide/coffeebanner_2.jpg';
import coffee_slide_3 from '../../assets/coffee_slide/coffeebanner_3.jpg';
import coffee_slide_4 from '../../assets/coffee_slide/coffeebanner_4.png';
// import coffee_slide_3 from '../../assets/coffee_slide/coffee_presentation_3.jpg';
// import coffee_slide_4 from '../../assets/coffee_slide/coffee_presentation_4.jpg';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const itemSlide = [
    coffee_slide_3, coffee_slide_4, coffee_slide_1, coffee_slide_2,
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
               autoplay={{delay: 2000}}
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
            <img src={`${item}`} alt="coffeeslide" />
        </div>
    );
}


export default ProductSlide;