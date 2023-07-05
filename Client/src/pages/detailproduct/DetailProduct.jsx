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
    const [products, setProducts] = useState([]);
    const [sizeS, setSizeS] = useState(false);
    const [sizeM, setSizeM] = useState(false);
    const [sizeL, setSizeL] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        const getDataById = async() => {
            const result = await getProductDetailById(id);
            setProducts(result.data);
        }
        getDataById();

    },[]);

    useEffect(() => {
        products.map((item, i) => {
            if(item.sizeData.id === 1) {
                setSizeS(true);
            }
            if(item.sizeData.id === 2) {
                setSizeM(true);
            }
            if(item.sizeData.id === 3) {
                setSizeL(true);
            }
        });
    })


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
                        <button className={`detail-product__wrapper__info__sizes__size-S ${sizeS ? '' : 'disable'}`}>
                            S
                        </button>
                        <button className={`detail-product__wrapper__info__sizes__size-M ${sizeM ? '' : 'disable'}`}>
                            M
                        </button>
                        <button className={`detail-product__wrapper__info__sizes__size-L ${sizeL ? '' : 'disable'}`}>
                            L
                        </button>
                    </div>

                    <div className="detail-product__wrapper__info__cate">
                        <span className="detail-product__wrapper__info__cate__price">
                            $ 100
                        </span>

                        <span className="detail-product__wrapper__info__cate__category">
                            Category: {products[0]?.productData.categoryData.categoryName}
                        </span>
                    </div>

                    <p className="detail-product__wrapper__info__desc">
                        {products[0]?.productData.productDescription}
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