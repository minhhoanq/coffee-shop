const db = require("../models");
const { Op } = require("sequelize");
const slugtify = require('slugify');
const similarity = require( 'compute-cosine-similarity' );

//Pagination, filter, sort
const getProductsService = ({page, limit, order, name, ...query}) => new Promise(async (resolve, reject) => {
        try {
            const queries = { raw: true, nest: true};
            const offset = (!page || +page <=1) ? 0 : (+page - 1);
            const flimit = +limit || +process.env.LIMIT_PRODUCT;
            queries.offset = offset * flimit;
            queries.limit = flimit;
            if(order) queries.order = [order];
            if(name) query.productName = { [Op.substring]: name };
            const response = await db.Product.findAndCountAll({
                where: query,
                ...queries,
                include: [
                    {
                        model: db.Category,
                        as: 'categoryData',
                        attributes: ['id', 'categoryName'],
                    }
                ]
            });

            resolve({
                err: response ? 0 : 1,
                mes: response ? "Thành công!" : "Thất bại!",
                productData: response,
            })
        } catch (error) {
            reject(error);
        }
});

const getProductDetailService = ({slug}) => new Promise(async(resolve, reject) => {
    try {
        if(!slug) {
            reject("Không nhận được id sản phẩm!");
            return;
        }

        const product = await db.Product.findOne({
            where: {
                slug
            }
        })

        const response = await db.Product_Size.findAll({
            where: {
                productId: product.id
            },
            attributes: ['id'],
            include: [
                {
                    model: db.Product,
                    as: 'productData',
                    attributes: ['id','slug', 'productName', 'categoryId', 'productDescription', 'productImg', 'price'],
                    include: [
                        {
                            model: db.Category,
                            as: 'categoryData',
                            attributes: ['id', 'categoryName'],
                        }
                    ]
                },
                {
                    model: db.Size,
                    as: 'sizeData',
                    attributes: ['id', 'sizeName', 'sizePriceModifier'],
                }
            ]
        });
        
        const productId = response[0]?.productData.id;
        const ratingProduct = await db.Rating.findAll({
            where: {
                productId: productId
            },
            attributes: ['id', 'star', 'comment', 'productId', 'createdAt', 'updatedAt'],
            include: [
                {
                    model: db.User,
                    as: 'userData',
                    attributes: ['id', 'username']
                }
            ]
        })

        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Thành công!' : 'Lỗi',
            dataDetailProduct: response,
            ratingProduct: ratingProduct,
        });
    } catch (error) {
        reject(error);
    }
});

const getProductByCategoryService = ({categoryId}) => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Product.findAll({
            where: {categoryId},
            include: [
                {
                    model: db.Category,
                    as: 'categoryData',
                    attributes: ['id', 'categoryName'],
                }
            ]
        });
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Thành công!' : 'Thất bại!',
            dataProductByCategory: response,
        })
    } catch (error) {
        reject(error);
    }
});

const createProductService = (body) => new Promise(async(resolve, reject) => {
    try {
        const {sizeId, recipeId, ...product} = body;
        if(Object.keys(product).length === 0) {
            reject("Dữ liệu đầu vào chưa đầy đủ!");
            return;
        }

        if(product.productName) {
            product.slug = slugtify(product.productName, {lower: true});
        }
        const [item, createdItem] = await db.Product.findOrCreate({
            where: product,
        });

        const newProduct_size = {
            sizeId,
            productId: item.id,
            recipeId
        }
        const [itemDetail, createdItemDetail]  = await db.Product_Size.findOrCreate({
            where: newProduct_size
        });

        if(!createdItemDetail) {
            reject({mes: "Sản phẩm đã có size tương ứng!"})
        }
        
        resolve({
            err: itemDetail ? 0 : 1,
            mes: itemDetail ? 'Thêm mới sản phẩm thành công' : 'Thêm mới sản phẩm thất bại!',
            createProductDetail: itemDetail
        });
    } catch (error) {
        reject(error);
    }
})

const ratingProductService = (user, { slug }, body) => new Promise(async(resolve, reject) => {
    try {
        const userId = user.id;
        const {star, comment} = body;

        if(!userId || !star) {
            reject({
                err: "Vui lòng đánh giá sản phẩm trước!",
            });
            return;
        }
        
        const product = await db.Product.findOne({
            where: {
                slug: slug,
            }
        });

        const [ratingProduct, created] = await db.Rating.findOrCreate({
            where: {
                userId: userId,
                productId: product.id,
            },
            defaults: {
                star: star,
                comment: comment
            }
        });
        if(!created) {
            await db.Rating.update({
                    star: star,
                    comment: comment,
                }, { where: {
                    userId: userId,
                    productId: product.id,
                }
            });
        }

        resolve({
            err: ratingProduct ? 0 : 1,
            mes: ratingProduct ? "Cảm ơn bạn đã để lại trải nghiệm của mình." : "Lỗi, hãy thử lại sau!",
            ratingProduct: ratingProduct
        })
    } catch (error) {
        reject(error)
    }
});

const getAllRatingsProductService = ({slug}) => new Promise( async(resolve, reject) => {
    try {
        if(!slug) {
            reject({
                err: 1,
                mes: "Chưa có thông tin!",
            })
        }

        const product = await db.Product.findOne({
            where: {
                slug: slug
            }
        });

        const response = await db.Rating.findAll({
            where: {
                productId: product.id,
            },
            include: [
                {
                    model: db.User,
                    as: 'userData',
                    attributes: ['id', 'username'],
                }
            ]
        });

        resolve({
            err: response ? 0 : 1,
            mes: response ? "Lấy thành công Đánh Giá sản phẩm" : "Có lỗi xảy ra, vui lòng thử lại!",
            ratingsData: response
        })
    } catch (error) {
        reject(error);
    }
});

const deleteRatingProductService = (user, { slug }) => new Promise( async(resolve, reject) => {
    try {
        const userId = user.id;
        if(!userId || !slug) {
            reject({
                err: 1,
                mes: "Thiếu thông tin!",
            })
        }
        
        const product = await db.Product.findOne({
            where: {
                slug: slug,
            }
        });

        const response = await db.Rating.destroy({
            where: {
                userId: userId,
                productId: product.id,
            }
        });

        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Xóa đánh giá thành công.' : 'Xảy ra khi xóa đánh giá này, hãy thử lại sau ít phút!',
            deleteRating: response
        });
    } catch (error) {
        reject(error);
    }
})

//RecommendSystemService
const recommendSystemService = () => new Promise(async(resolve, reject) => {
    try {
        const ratings = await db.Rating.findAll();
        const arrRating = [];
        ratings.forEach(element => {
            arrRating.push(element.dataValues)
        });

        // console.log(arrRating.length)

        const products = await db.Product.findAll();
        const arrProduct = [];
        products.forEach(element => {
            arrProduct.push(element.dataValues)
        });

        const users = await db.User.findAll();
        const arrUser = [];
        users.forEach(element => {
            arrUser.push(element.dataValues)
        });

        var numbers = [];
        
        // Lặp theo hàng
        for (var i = 0; i < arrProduct.length; i++){
            numbers[i] = [];
            // Lặp theo cột, số cộ từ 0 -> số lượng phần tử của hàng i
            for (var j = 0; j < arrUser.length; j++){
                numbers[i][j] = undefined;
                for(var k = 0; k < arrRating.length; k++) {
                    if(arrRating[k].productId == arrProduct[i].id && arrRating[k].userId == arrUser[j].id) {
                        numbers[arrProduct[i].id - 1][arrUser[j].id - 1] = arrRating[k].star;
                        // console.log(numbers[i][j])
                    }
                }
            }
        }

        const normalization = numbers;

        for(let i = 0; i < numbers[0].length; i++) {
            //sum of user rated items
            let sum = 0;
            //average of user rated items
            let average = 0;
            //Quantity items is rated by user
            let count = 0;
            for(let j = 0; j < numbers.length; j++) {
                if(numbers[j][i] != undefined){
                    sum += Number(numbers[j][i]);
                    count++
                }
            }
            average = sum / count;
            // console.log(average)
            // Data Normalization
            for(let k = 0; k < numbers.length; k++) {
                if(numbers[k][i] != undefined){
                    normalization[k][i] = numbers[k][i] - average.toFixed(2)
                } else {
                    normalization[k][i] = 0
                }
            }
        }

        const array = [];
        for(let i = 0; i < normalization[0].length; i++) {
            array[i] = []
            for(let j = 0; j < 5; j++) {
                array[i][j] = normalization[j][i]
            }
        }

        const similar_users = [];

        const s = similarity(normalization[0], normalization[1])
        for(let i = 0; i < array.length; i++) {
            similar_users[i] = []
            for(let j = 0; j < array.length; j++) {
                similar_users[i][j] = similarity(array[i], array[j]);
            }
        }

        const array2 = [];
        array.splice(5, 1);
        
        // delete similar_users[0]
        // const products_of_user_picked = similar_users.splice(5, 1);
        similar_users[5].splice(5, 1)
        const similar_user_picked = similar_users[5];

        for(let i = 0; i < array[0].length; i++) {
            array2[i] = []
            for(let j = 0; j < 6; j++) {
                array2[i][j] = array[j][i]
            }
        }
        
        array2.splice(1, 2);

        // const sortSimilarUser = similar_user_picked.sort((a, b) => (b - a));

        // const product_diff = array.filter(e => (

        // ))
        const item_score = [];
        for(let i = 0; i < array2.length; i++) {
            let count = 0;
            let total = 0;
            const movie_rating = array2[i]
            for(let j = 0; j < similar_user_picked.length; j++) {
                const score = similar_user_picked[j] * movie_rating[j];
                total += score;
                count++
            }
            item_score[i] = total / count
        }

        resolve({
            err: "err",
            mes: "mes",
            data: array2,
            data1: similar_user_picked,
            data2: item_score
        })
    } catch (error) {
        reject(error)
    }
})

module.exports = { 
    getProductsService, 
    getProductDetailService, 
    getProductByCategoryService, 
    createProductService, 
    ratingProductService, 
    getAllRatingsProductService,
    deleteRatingProductService,
    recommendSystemService
};