import React from "react";

import './product-list.scss';
import ProductCard from '../productcard/ProductCard';

import { Swiper, SwiperSlide } from 'swiper/react';

const ProductList = props => {

    const itemList = props.items;

    return (
        <div className="grid wide">
            <div className="product-list">
                <div className="product-list__default row">
                    { itemList.map((item, i) => (
                        <ProductCard className={"col l-2-4 m-4 c-6"} key={i} item={item}/>
                    ))}
                </div>
            </div>

            {/* <div className="product-list__mobile">
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
            </div> */}
        </div>
    );
}

export default ProductList;