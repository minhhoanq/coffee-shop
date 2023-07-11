import React from "react";

import './product-card.scss';
import { useDispatch} from "react-redux";
import { toast } from 'react-toastify';
import { cartActions } from "../../redux/slice/cartSlice";

const ProductCard = props => {

    const item = props.item;
    // const dispatch = useDispatch();

    // const handleAddToCart = () => {
    //     dispatch(
    //         cartActions.addItem({
    //             id: item.id,
    //             productName: item.productName,
    //             price: item.price,
    //             imgUrl: item.imgUrl,
    //         })
    //     );
    //     toast.success('Product added successfully');
    // };

    return (
        <div className="product-card">
            <a className="product-card__link" href={`/shop/${item.id}`}>
                <img className="product-card__link__img" src={`${item.productImg}`}/>

                <div className="product-card__link__info">
                    <span className="product-card__link__info__name">
                        {item.productName}
                    </span>

                    <p className="product-card__link__info__type">
                        {item.categoryData.categoryName}
                    </p>
                </div>
                
                <div className="product-card__actions">
                    <span className="product-card__actions__price">
                        {`${item.price}.000 đ`}
                    </span>
                </div>
            </a>
        </div>
    );
}

export default ProductCard;