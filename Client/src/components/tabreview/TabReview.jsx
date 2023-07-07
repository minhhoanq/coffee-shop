import React from "react";

import './tab-review.scss';
import { useState } from "react";
import Button from "../button/Button";

const TabReview = props => {

    const[tab, setTab] = useState('desc');
    const item = props.item;
    console.log(item);

    return (
        <div className="tab-review">
            <div className={"tab-review__wrapper"} >
                <span className={`tab-review__wrapper__desc  ${tab === 'desc' ? 'active' : ''}`} onClick={() => setTab('desc')}>
                    Mô tả
                </span>

                <span className={`tab-review__wrapper__reviews ${tab === 'reviews' ? 'active' : ''}`} onClick={() => setTab('reviews')}>
                    Đánh giá (2)
                </span>
            </div>

            {tab === 'desc' ? (<TabDescription description={item?.productDescription}/>) : ('None')}
        </div>
    )
}

export const TabDescription = props => {

    return (
        <div className="tab-description">
            <span>{props.description}</span>
        </div>
    )
}

export const TabReviews = props => {

    const reviews = props.reviews;

    return (
        <div className="tab-reviews">

            {reviews.map((review, i) => (
                <div className="tab-reviews__users" key={i}>
                    <span className="tab-reviews__users__name">John Canvas</span>

                    <span className="tab-reviews__users__rate">{review.rating} (rating)</span>

                    <span className="tab-reviews__users__comment">{review.text}</span>
                </div>
            ))}

            <div className="tab-reviews__write">
                <span className="tab-reviews__write__title">
                    Leave your experience
                </span>

                <div className="tab-reviews__write__rating">
                    <i class="ri-star-s-fill">1</i>
                    <i class="ri-star-s-fill">2</i>
                    <i class="ri-star-s-fill">3</i>
                    <i class="ri-star-s-fill">4</i>
                    <i class="ri-star-s-fill">5</i>
                </div>

                <div className="tab-reviews__write__wrapper">
                    <textarea className="tab-reviews__write__wrapper__content"></textarea>
                </div>

                <Button>Submit</Button>
            </div>
        </div>
    )
}

export default TabReview;