import React from "react";

import './tab-review.scss';
import { useState } from "react";
import Button from "../button/Button";
import { useSelector } from "react-redux";
import { createRatingProduct, deleteRatingProduct } from "../../api/ratingApi";

const TabReview = props => {

    const[tab, setTab] = useState('desc');
    const itemProduct = props.itemProduct;
    const itemRatings = props.itemRatings;

    return (
        <div className="tab-review">
            <div className={"tab-review__wrapper"} >
                <span className={`tab-review__wrapper__desc  ${tab === 'desc' ? 'active' : ''}`} onClick={() => setTab('desc')}>
                    Mô tả
                </span>

                <span className={`tab-review__wrapper__reviews ${tab === 'reviews' ? 'active' : ''}`} onClick={() => setTab('reviews')}>
                    Đánh giá ({itemRatings.length})
                </span>
            </div>

            {tab === 'desc' ? (<TabDescription description={itemProduct?.productDescription}/>) : (<TabReviews product={itemProduct} reviews={itemRatings}/>)}
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
    const[comment, setComment] = useState('');
    const[star, setStar] = useState(null);
    const[hover, setHover] = useState(null);
    const reviews = props.reviews;
    const product = props.product;
    const user = useSelector(state => state.auth?.currentUser);
    const accessToken = user?.generateAccessToken;

    const handleSubmitRating = async(e) => {

        const createRating = await createRatingProduct(accessToken, product.slug, star, comment);
        console.log(createRating);
    }

    const handleDeleteRating = async() => {
        const deleteRating = await deleteRatingProduct(accessToken, product.slug);
        console.log(deleteRating);
    }

    return (
        <div className="tab-reviews">

            {Object.keys(reviews).length !== 0 ? reviews.map((review, i) => (
                <div className="tab-reviews__users" key={i}>
                    <div className="tab-reviews__users__info-ratings">
                        <span className="tab-reviews__users__info-ratings__name">{review.userData.username}</span>

                        <span className="tab-reviews__users__info-ratings__rate">{review.star} 
                            <i class="ri-star-s-fill"></i>
                        </span>

                        <span className="tab-reviews__users__info-ratings__comment">{review.comment}</span>
                    </div>
                    <div className="tab-reviews__users__trash" onClick={handleDeleteRating}>
                        <i class="ri-delete-bin-line"></i> 
                    </div>
                </div>
            )) : <div>Không có đánh giá nào!</div>}

            {user && 
            <div className="tab-reviews__write">
            <span className="tab-reviews__write__title">
                Leave your experience
            </span>

            <div className="tab-reviews__write__rating">
                {
                    [...Array(5)].map((item, index) => {
                        const currentRating = index + 1;
                        return (
                            <label>
                                <input
                                    key={index}
                                    type="radio"
                                    name="rating"
                                    value={currentRating}
                                    onClick={() => setStar(currentRating)}
                                />
                                    <i
                                        class="ri-star-fill star"
                                        style={{color: `${currentRating <= (hover || star) ? "#ffc107" : "#999999"}`}}
                                        onMouseEnter={() => setHover(currentRating)}
                                        onMouseLeave={() => setHover(null)}
                                    ></i>
                            </label>
                        )
                    })
                }
            </div>

            <div className="tab-reviews__write__wrapper">
                <textarea 
                    className="tab-reviews__write__wrapper__content" 
                    onChange={(e) => setComment(e.target.value)} 
                    placeholder="Hãy cho chúng tôi biết về suy nghĩ của bạn ?"
                ></textarea>
            </div>

            <Button type={'button'} onClick={handleSubmitRating}>Submit</Button>
        </div>}
        </div>
    )
}

export default TabReview;