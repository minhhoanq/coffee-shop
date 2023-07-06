import React, {useState, useEffect} from "react";

import './detail-product.scss';
import PageHeader from '../../components/pageheader/PageHeader';
import Button from '../../components/button/Button';
import { useParams } from "react-router-dom";
import TabReview from "../../components/tabreview/TabReview";
import ProductList from '../../components/productlist/ProductList';
import { getProductDetailById, getProductByCategoryId } from "../../redux/slice/apiRequest";

const DetailProduct = () => {
    const [products, setProducts] = useState([]);
    const [size, setSize] = useState('');
    const [price, setPrice] = useState(0);
    const [productSimilars, setproductSimilars] = useState([]);

    const { id } = useParams();

    const getDataById = async() => {
        const result = await getProductDetailById(id);
        setProducts(result.data);
        setPrice(`${result.data[0]?.productData.price} - ${result.data[0]?.productData.price + 10}`);
    }

    const getDataByCategoryId = async() => {
        const result = await getProductByCategoryId(1);
        setproductSimilars(result.data);
    }
    useEffect(() => {
        getDataById();
        getDataByCategoryId();
    },[]);

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
    });

    const handleBtnSize = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        if(size === '') {
            setSize(e.target.id);
            document.getElementById(`${e.target.id}`).classList.add('focus');
            if(e.target.id === 'btn-size-S') { 
                setPrice(products[0].productData.price);
            } else if ( e.target.id === 'btn-size-M') {
                setPrice(products[0].productData.price + 5);
            } else if (e.target.id === 'btn-size-L') {
                setPrice(products[0].productData.price + 10);
            }
            return;
        }

        if(size === e.target.id) {
            document.getElementById(`${e.target.id}`).classList.remove('focus');
            setSize('');
            setPrice(`${products[0].productData.price} - ${products[0].productData.price + 10}`);
            return;
        } 

        if (size !== e.target.id) {
            document.getElementById(`${size}`).classList.remove('focus');
            document.getElementById(`${e.target.id}`).classList.add('focus');
            setSize(e.target.id);
            if(e.target.id === 'btn-size-S') { 
                setPrice(products[0].productData.price);
            } else if ( e.target.id === 'btn-size-M') {
                setPrice(products[0].productData.price + 5);
            } else if (e.target.id === 'btn-size-L') {
                setPrice(products[0].productData.price + 10);
            }
            return;
        }
    }

    const handleAddToCart = (e) => {
        const newProduct = {
            size,
            price
        }
        console.log(newProduct);

    }

    return (
        <div className="detail-product">
            <PageHeader title={'Product Detail'}/>

            <div className="detail-product__wrapper">

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
                            ratings
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

                    <div className="detail-product__wrapper__info__cate">
                        <span className="detail-product__wrapper__info__cate__price">
                            {price}.000đ
                        </span>

                        <span className="detail-product__wrapper__info__cate__category">
                            Category: {products[0]?.productData.categoryData.categoryName}
                        </span>
                    </div>

                    <p className="detail-product__wrapper__info__desc">
                        {products[0]?.productData.productDescription}
                    </p>

                    <Button onClick={handleAddToCart} className="detail-product__wrapper__info__btn">Add to cart</Button>
                </div>
            </div>

            <div className="detail-product__review">
                <TabReview item={products[0]?.productData}/>
            </div>

            <div className="detail-product__similar">
                <span className="detail-product__similar__title">You might also like</span>
                <ProductList items={productSimilars}/>
            </div>
        </div>
    );
}

export default DetailProduct;