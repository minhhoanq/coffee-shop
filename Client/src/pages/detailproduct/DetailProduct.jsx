import React, {useState, useEffect} from "react";

import './detail-product.scss';
import PageHeader from '../../components/pageheader/PageHeader';
import Button from '../../components/button/Button';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import TabReview from "../../components/tabreview/TabReview";
import ProductList from '../../components/productlist/ProductList';
import { addToCartItem, getProductDetailById, getProductByCategoryId, getProductDetailBySlug } from "../../api/productApi";
import { toast } from "react-toastify";

const DetailProduct = () => {
    const [products, setProducts] = useState([]);
    const [size, setSize] = useState('btn-size-S');
    const [price, setPrice] = useState();
    const [productSimilars, setproductSimilars] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [note, setNote] = useState('');

    const { slug } = useParams();
    const user = useSelector(state => state.auth.login?.currentUser);
    const userId = user?.others.id;

    //Get api
    const getDataById = async() => {
        const result = await getProductDetailBySlug(slug);

        setProducts(result.dataDetailProduct);
        setPrice(result.dataDetailProduct[0]?.productData.price);
    }

    const getDataByCategoryId = async() => {
        const result = await getProductByCategoryId(1);
        setproductSimilars(result.data);
    }
    useEffect(() => {
        getDataById();
        getDataByCategoryId();
        document.getElementById(`${size}`).classList.add('focus');
    },[]);

    console.log(products);


    //Disable button size
    const disableBtnSize = (str) => {
        document.getElementById(`btn-size-${str}`).disabled = true;
        document.getElementById(`btn-size-${str}`).classList.add('disable');
    }

    useEffect(() => {
        disableBtnSize('S');
        disableBtnSize('M');
        disableBtnSize('L');
        products.map((item, i) => {
            if(item.sizeData.id) {
                document.getElementById(`btn-size-${item.sizeData.sizeName}`).disabled = false;
                document.getElementById(`btn-size-${item.sizeData.sizeName}`).classList.remove('disable');
                return;
            }
        });
    },[products]);

    //Selected size
    const handleBtnSize = (e) => {
        e.preventDefault();

        if(size === e.target.id) {
            return;
        } 

        if (size !== e.target.id) {
            document.getElementById(`${size}`).classList.remove('focus');
            document.getElementById(`${e.target.id}`).classList.add('focus');
            setSize(e.target.id);
            if(e.target.id === 'btn-size-S') { 
                setPrice((products[0].productData.price + products[0].sizeData.sizePriceModifier) * quantity);
            } else if ( e.target.id === 'btn-size-M') {
                setPrice((products[0].productData.price + products[1].sizeData.sizePriceModifier) * quantity);
            } else if (e.target.id === 'btn-size-L') {
                setPrice((products[0].productData.price + products[2].sizeData.sizePriceModifier) * quantity);
            }
            return;
        }
    }

    //Selected quantity

    const handleBtnMinus = (e) => {
        e.preventDefault();
        let cost = 0;
        if(size === 'btn-size-S') {
            cost = products[0]?.productData.price + products[0]?.sizeData.sizePriceModifier;
        } else if (size === 'btn-size-M') {
            cost = products[0]?.productData.price + products[1]?.sizeData.sizePriceModifier;
        } else {
            cost = products[0]?.productData.price + products[2]?.sizeData.sizePriceModifier;
        }

        if(quantity <= 1) {
            return;
        }

        setQuantity(quantity - 1);
        setPrice(price - cost);
    }

    const handleBtnPlus = (e) => {
        e.preventDefault();
        let cost = 0;
        if(size === 'btn-size-S') {
            cost = products[0]?.productData.price + products[0]?.sizeData.sizePriceModifier;
        } else if (size === 'btn-size-M') {
            cost = products[0]?.productData.price + products[1]?.sizeData.sizePriceModifier;
        } else {
            cost = products[0]?.productData.price + products[2]?.sizeData.sizePriceModifier;
        }

        if(quantity >= 20) {
            return;
        }

        setQuantity(quantity + 1);
        setPrice(price + cost);
    }

    const handleNote = (e) => {
        setNote(e.target.value);
    }

    // const handleAddToCart = async(e) => {
    //     const s = size.slice(-1);
    //     const productPost = products.find(
    //         item => item.productData.id === Number(id) && item.sizeData.sizeName === s
    //     )

    //     const n = productPost.id;
    //     const newProduct = {
    //         n,
    //         price,
    //         quantity,
    //         note
    //     }
    //     console.log(newProduct);

    //     const response = await addToCartItem(userId, n, quantity, price, note);

    //     const responseErr = {...response.response?.data};
    //     if(responseErr.err === 1) {
    //         toast.error(responseErr.msg);
    //         return;
    //     }

    //     toast.success({...response}.status);
    // }

    return (
        <div className="detail-product grid">
            <PageHeader title={products[0]?.productData.productName}/>

            <div className="detail-product__wrapper wide row">

                <div className="detail-product__wrapper__img">
                    <img src={`${products[0]?.productData.productImg}`} alt=""/>
                </div>

                <div className="detail-product__wrapper__info">

                    <span className="detail-product__wrapper__info__name">{products[0]?.productData.productName}</span>

                    <div className="detail-product__wrapper__info__rating">

                        <div className="detail-product__wrapper__info__rating__star">
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                        </div>
                        
                        <div className="detail-product__wrapper__info__rating__ratings">
                            <span>23  </span>
                            đánh giá
                        </div>
                    </div>

                    <div className="detail-product__wrapper__info__sizes">
                        <button 
                            id={'btn-size-S'}
                            className={`detail-product__wrapper__info__sizes__size-S`}
                            onClick={handleBtnSize}
                            >
                            S
                        </button>
                        <button 
                            className={`detail-product__wrapper__info__sizes__size-M`}
                            id={'btn-size-M'}
                            onClick={handleBtnSize}
                        >
                            M
                        </button>

                        <button 
                            id={'btn-size-L'}
                            className={`detail-product__wrapper__info__sizes__size-L`}
                            onClick={handleBtnSize}
                            >
                            L
                        </button>
                    </div>

                    <div className="detail-product__wrapper__info__quantity">
                        <button className="detail-product__wrapper__info__quantity__btn-minus" onClick={handleBtnMinus}>
                            <i class="ri-subtract-line"></i>
                        </button>

                        <span className="detail-product__wrapper__info__quantity__number">
                            {quantity}
                        </span>

                        <button className="detail-product__wrapper__info__quantity__btn-plus" onClick={handleBtnPlus}>
                            <i class="ri-add-line"></i>
                        </button>
                    </div>

                    <div className="detail-product__wrapper__info__cate">
                        <span className="detail-product__wrapper__info__cate__price">
                            {price}.000đ
                        </span>

                        <span className="detail-product__wrapper__info__cate__category">
                            Loại: {products[0]?.productData.categoryData.categoryName}
                        </span>
                    </div>

                    <textarea 
                        className="detail-product__wrapper__info__note" placeholder="Bạn cần lưu ý gì thì viết ở đây nhé ^^"
                        onChange={handleNote}
                        >
                    </textarea>

                    <Button  className="detail-product__wrapper__info__btn">Add to cart</Button>
                </div>
            </div>

            <div className="detail-product__review wide col">
                <TabReview item={products[0]?.productData}/>
            </div>

            <div className="detail-product__similar wide col">
                <span className="detail-product__similar__title">Bạn cũng có thể thích</span>
                {/* <ProductList items={productSimilars}/> */}
            </div>
        </div>
    );
}

export default DetailProduct;