import React from "react";

import './product-card.scss';
import { Link } from "react-router-dom";

const ProductCard = props => {

    const item = props.item;

    return (
        <div className="product-card">
            <Link className="product-card__link">
                <img className="product-card__link__img" src={`${item.imgUrl}`}/>

                <div className="product-card__link__info">
                    <span className="product-card__link__info__name">
                        {item.productName}
                    </span>

                    <p className="product-card__link__info__type">
                        {item.category}
                    </p>
                </div>
            </Link>

            <div className="product-card__actions">
                <span className="product-card__actions__price">
                    {`${item.price} $`}
                </span>

                <button className="product-card__actions__btn">
                <i class="ri-add-circle-fill"></i>
                </button>
            </div>
        </div>
    );
}

export default ProductCard;