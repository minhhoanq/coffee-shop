import React from "react";

import './product-list.scss';
import ProductCard from '../productcard/ProductCard';

import { Swiper, SwiperSlide } from 'swiper/react';

const ProductList = props => {

    const itemList = props.items;

    return (
        <div className="product-list">
            <div className="product-list__default">
                { itemList.map((item, i) => (
                    <ProductCard key={i} item={item}/>
                ))}
            </div>

            <div className="product-list__mobile">
                <Swiper
                    grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={"auto"}
                >
                    {itemList.map((item, i) => (
                        <SwiperSlide
                            key={i}
                        >
                            <ProductCard item={item}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default ProductList;