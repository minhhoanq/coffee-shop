import React, {useState, useEffect} from "react";

import './detail-product.scss';
import PageHeader from '../../components/pageheader/PageHeader';
import Button from '../../components/button/Button';
import { useParams } from "react-router-dom";
import products from '../../assets/data/products';
import TabReview from "../../components/tabreview/TabReview";
import ProductList from '../../components/productlist/ProductList';
import { getProductDetailById } from "../../redux/slice/apiRequest";

const DetailProduct = () => {

    //const[productSimilars, setProductSimilars] = useState([]);
    const [product, setProduct] = useState([]);

    const { id } = useParams();

    // const value = products.find(item => item.id === id);

    // useEffect(() => {
    //     const listSimilars = products.filter((item) => item.category === value.category);
    //     setProductSimilars(listSimilars);
    // },[value.category]);

    // console.log(value);

    useEffect(() => {
        const getDataById = async() => {
            const result = await getProductDetailById(id);
            setProduct(result.data)
        }
        getDataById();
    },[]);

    console.log(product);

    return (
        <div className="detail-product">
            <PageHeader title={'Product Detail'}/>

            <div className="detail-product__wrapper">

                <div className="detail-product__wrapper__img">
                    <img src={`${product.productData.productImg}`} alt=""/>
                </div>

                <div className="detail-product__wrapper__info">

                    <span className="detail-product__wrapper__info__name">{product.productData.productName}</span>

                    <div className="detail-product__wrapper__info__rating">

                        <div className="detail-product__wrapper__info__rating__star">
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                            <i class="ri-star-s-fill"></i>
                        </div>
                        
                        <div className="detail-product__wrapper__info__rating__ratings">
                            <span>John Canvas</span>
                            ratings
                        </div>
                    </div>

                    <div className="detail-product__wrapper__info__cate">
                        <span className="detail-product__wrapper__info__cate__price">
                            $ 100
                        </span>

                        <span className="detail-product__wrapper__info__cate__category">
                            Category: {product.productData.categoryData.categoryName}
                        </span>
                    </div>

                    <p className="detail-product__wrapper__info__desc">
                        {product.productData.productDescription}
                    </p>

                    <Button className="detail-product__wrapper__info__btn">Add to cart</Button>
                </div>
            </div>

            {/* <div className="detail-product__review">
                <TabReview item={value}/>
            </div> */}

            {/* <div className="detail-product__similar">
                <span className="detail-product__similar__title">You might also like</span>
                <ProductList items={productSimilars}/>
            </div> */}
        </div>
    );
}

export default DetailProduct;