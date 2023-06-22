import React from "react";

import './detail-product.scss';
import PageHeader from '../../components/pageheader/PageHeader';
import Button from '../../components/button/Button';
import { useParams } from "react-router-dom";
import products from '../../assets/data/products';

const DetailProduct = () => {

    const { id } = useParams();

    let value={};

    products.filter((item) => {
        if(item.id === id) {
            value = item;
        }
    });

    return (
        <div className="detail-product">
            <PageHeader title={'Product Detail'}/>

            <div className="detail-product__wrapper">

                <div className="detail-product__wrapper__img">
                    <img src={`${value.imgUrl}`} alt=""/>
                </div>

                <div className="detail-product__wrapper__info">

                    <span className="detail-product__wrapper__info__name">{value.productName}</span>

                    <div className="detail-product__wrapper__info__rating">

                        <div className="detail-product__wrapper__info__rating__star">
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                        </div>
                        
                        <div className="detail-product__wrapper__info__rating__ratings">
                            <span>{value.avgRating} </span>
                            ratings
                        </div>
                    </div>

                    <div className="detail-product__wrapper__info__cate">
                        <span className="detail-product__wrapper__info__cate__price">
                            ${value.price}
                        </span>

                        <span className="detail-product__wrapper__info__cate__category">
                            Category: {value.category}
                        </span>
                    </div>

                    <p className="detail-product__wrapper__info__desc">
                        {value.shortDesc}
                    </p>

                    <Button className="detail-product__wrapper__info__btn">Add to cart</Button>
                </div>
            </div>
        </div>
    );
}

export default DetailProduct;